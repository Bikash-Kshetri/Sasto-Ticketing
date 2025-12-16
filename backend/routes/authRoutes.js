import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authController from "../controllers/authController.js";
import { ensureAuthenticated, ensureAdmin } from "../middleware/authmiddleware.js";
import { body } from "express-validator";

const router = express.Router();

/* ----------------------------- LANDING PAGE ----------------------------- */
router.get("/", (req, res) => {
  res.render("landing", { user: req.session.user || null });
});

/* ----------------------------  PROTECTED PAGES ----------------------- */
router.get("/flights", ensureAuthenticated, (req, res) =>
  res.render("flights")
);


router.get("/manageContent", ensureAuthenticated, ensureAdmin, (req, res) =>
  res.render("manageContent")
);

/* ----------------------- REGISTER (Server-side Form) --------------------- */
router.get("/register", authController.getRegister);

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email")
      .notEmpty().withMessage("Email is required")
      .isEmail()
      .withMessage("Enter a valid email address"),
    body("password")
      .isLength({ min: 12 })
      .withMessage("Password must be at least 12 characters")
      .matches(/[a-z]/)
      .withMessage("Password must contain lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain number")
      .matches(/[^A-Za-z0-9]/)
      .withMessage("Password must contain symbol"),
    body("captchaInput").notEmpty().withMessage("CAPTCHA is required"),
  ],
  authController.postRegister
);

/* ------------------------------ LOGIN API ----------------------------- */
router.get("/login", authController.getLogin);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* ------------------------------- USER AREA ------------------------------- */
router.get("/home", ensureAuthenticated, authController.getHome);
router.get("/logout", authController.logout);

/* ------------------------------ ADMIN ACTIONS ---------------------------- */
router.get("/admin", ensureAuthenticated, authController.getAdminDashboard);
router.post("/admin/delete/:id", ensureAuthenticated, authController.deleteUser);
router.post("/admin/make-admin/:id", ensureAuthenticated, authController.makeAdmin);
router.post("/admin/remove-admin/:id", ensureAuthenticated, authController.removeAdmin);

/* --------------------------- FORGOT PASSWORD FLOW ------------------------ */
router.get("/forgot", authController.getForgot);
router.post("/forgot", authController.postForgot);

router.get("/verify", authController.getVerify);
router.post("/verify", authController.postVerify);

router.get("/reset/:code", authController.getReset);
router.post("/reset/:code", authController.postReset);

router.get("/change-password", ensureAuthenticated, authController.getChangePassword);
router.post("/change-password", ensureAuthenticated, authController.postChangePassword);

/* ----------------------------- SIGNUP API (JSON) ------------------------- */
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ success: false, message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ firstName, lastName, email, phone, password: hashedPassword });

    res.json({ success: true, message: "Account created successfully", userId: newUser._id });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
