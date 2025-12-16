// controllers/authController.js
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import nodemailer from "nodemailer";

const resetTokens = {};

// Password strength checker
function isStrongPassword(password) {
  return (
    password.length >= 12 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[\W_]/.test(password)
  );
}

// CAPTCHA generator
function generateCaptcha() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Store new CAPTCHA in session
function regenerateCaptcha(req) {
  const captcha = generateCaptcha();
  req.session.captcha = captcha;
  return captcha;
}

// GET Register Page
const getRegister = (req, res) => {
  const captcha = regenerateCaptcha(req);
  res.render("register", { error: null, captcha, validationErrors: {} });
};

// POST Register Handler
const postRegister = async (req, res) => {
  const { username, email, password, captchaInput } = req.body;
  const captchaCode = req.session.captcha;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((err) => err.msg)
      .join(", ");
    return res.render("register", {
      error: errorMessages,
      captcha: regenerateCaptcha(req),
      validationErrors: errors.mapped(),
    });
  }

  if (captchaInput !== captchaCode) {
    return res.render("register", {
      error: "Incorrect CAPTCHA",
      captcha: regenerateCaptcha(req),
      validationErrors: { captchaInput: { msg: "Incorrect CAPTCHA" } },
    });
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    const field = existingUser.username === username ? "username" : "email";
    const msg =
      field === "username" ? "Username already exists" : "Email already exists";
    return res.render("register", {
      error: msg,
      captcha: regenerateCaptcha(req),
      validationErrors: { [field]: { msg } },
    });
  }

  if (!isStrongPassword(password)) {
    return res.render("register", {
      error:
        "Password must be at least 12 characters and contain upper, lower, number, and symbol.",
      captcha: regenerateCaptcha(req),
      validationErrors: {
        password: { msg: "Password does not meet strength requirements" },
      },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, passwordHash: hashedPassword });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    console.error("Error saving user:", err);
    res.render("register", {
      error: "Database error occurred. Please try again.",
      captcha: regenerateCaptcha(req),
      validationErrors: {},
    });
  }
};

// GET Login Page
const getLogin = (req, res) => {
  res.render("login", { error: null });
};

// POST Login Handler
const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.render("login", { error: "Invalid credentials" });
  }

  req.session.userId = user._id;
  req.session.role = user.role;
  req.session.user = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  if (user.role === "admin") {
    return res.redirect("/admin");
  } else {
    return res.redirect("/");
  }
};

// GET Home Page
const getHome = async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  const user = await User.findById(req.session.userId);
  if (!user) return res.redirect("/login");

  res.render("home", { username: user.username, role: user.role });
};

// Logout Handler
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

// Admin Dashboard
const getAdminDashboard = async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  const currentUser = await User.findById(req.session.userId);
  if (!currentUser || currentUser.role !== "admin") {
    return res.status(403).send("Access Denied");
  }

  try {
    const users = await User.find();
    res.render("admin", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Server Error");
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.redirect("/admin");
  } catch (err) {
    res.status(500).send("Failed to delete user");
  }
};

// Promote user to admin
const makeAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send("User not found");

    user.role = "admin";
    await user.save();

    res.redirect("/admin");
  } catch (err) {
    console.error("Error promoting user:", err);
    res.status(500).send("Failed to promote user");
  }
};

// Promote admin to user
const removeAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send("admin not found");

    user.role = "user";
    await user.save();

    res.redirect("/admin");
  } catch (err) {
    console.error("Error promoting admin:", err);
    res.status(500).send("Failed to promote admin");
  }
};

// Email sender setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kshetridilip2020@gmail.com",
    pass: "jjqo rhxr srwr uzys", // App Password
  },
});

// Forgot Password
const getForgot = (req, res) => {
  res.render("forgot", { error: null, success: null });
};

const postForgot = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });

  if (!user) {
    return res.render("forgot", { error: "User not found", success: null });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  resetTokens[code] = {
    userId: user._id,
    expires: Date.now() + 15 * 60 * 1000,
  };

  try {
    await transporter.sendMail({
      from: "kshetridilip2020@gmail.com",
      to: user.email,
      subject: "Password Reset Code",
      text: `Your password reset code is: ${code}`,
    });

    res.render("verify", {
      success: `Reset code sent to your email.`,
      error: null,
    });
  } catch (err) {
    console.error(err);
    res.render("forgot", { error: "Failed to send email", success: null });
  }
};

// Password Reset
const getVerify = (req, res) => {
  res.render("verify", { error: null });
};

const postVerify = (req, res) => {
  const { code } = req.body;

  if (!resetTokens[code] || resetTokens[code].expires < Date.now()) {
    return res.render("verify", { error: "Invalid or expired code." });
  }

  res.redirect(`/reset/${code}`);
};

const getReset = (req, res) => {
  const { code } = req.params;
  if (!resetTokens[code] || resetTokens[code].expires < Date.now()) {
    return res.send("Invalid or expired reset code.");
  }
  res.render("reset", { code, error: null });
};

const postReset = async (req, res) => {
  const { code } = req.params;
  const { password } = req.body;

  if (!resetTokens[code] || resetTokens[code].expires < Date.now()) {
    return res.send("Invalid or expired reset code.");
  }

  if (!isStrongPassword(password)) {
    return res.render("reset", {
      code,
      error:
        "Password must be strong (12+ characters, upper, lower, digit, symbol)",
    });
  }

  const userId = resetTokens[code].userId;
  const hashed = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(userId, { passwordHash: hashed });

  delete resetTokens[code];
  res.redirect("/login");
};

// Change Password
const getChangePassword = (req, res) => {
  if (!req.session.userId) return res.redirect("/login");
  res.render("changePassword", {
    username: req.session.user.username,
    error: null,
    success: null,
  });
};

const postChangePassword = async (req, res) => {
  if (!req.session.userId) return res.redirect("/login");

  const { oldPassword, newPassword, confirmPassword } = req.body;
  const userId = req.session.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.render("changePassword", {
        username: req.session.user.username,
        error: "User not found.",
        success: null,
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
    if (!isMatch) {
      return res.render("changePassword", {
        username: req.session.user.username,
        error: "Old password is incorrect.",
        success: null,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.render("changePassword", {
        username: req.session.user.username,
        error: "New passwords do not match.",
        success: null,
      });
    }

    if (!isStrongPassword(newPassword)) {
      return res.render("changePassword", {
        username: req.session.user.username,
        error:
          "New password must be at least 12 characters and contain uppercase, lowercase, number, and symbol.",
        success: null,
      });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    user.passwordHash = hashed;
    await user.save();

    res.render("changePassword", {
      username: req.session.user.username,
      error: null,
      success: "Password updated successfully.",
    });
  } catch (err) {
    console.error("Error changing password:", err);
    res.render("changePassword", {
      username: req.session.user.username,
      error: "Server error occurred. Please try again.",
      success: null,
    });
  }
};

// ✅ Export everything as default for ESM
export default {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getHome,
  logout,
  getAdminDashboard,
  deleteUser,
  makeAdmin,
  removeAdmin,
  getForgot,
  postForgot,
  getVerify,
  postVerify,
  getReset,
  postReset,
  getChangePassword,
  postChangePassword,
};
