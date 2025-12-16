import jwt from "jsonwebtoken";
import User from "../models/user.js";

/* ---------------------- JWT PROTECT MIDDLEWARE ---------------------- */
export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

/* -------------------- SESSION AUTHENTICATION -------------------- */
export function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.redirect("/login");
}

/* ------------------------ ADMIN CHECK ------------------------ */
export async function ensureAdmin(req, res, next) {
  try {
    if (!req.session || !req.session.userId) {
      return res.redirect("/login");
    }

    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.redirect("/login");
    }

    if (user.role !== "admin") {
      return res.status(403).send("Access denied. Admins only.");
    }

    // Attach full user object for downstream use
    req.user = user;
    next();
  } catch (err) {
    console.error("Error in ensureAdmin middleware:", err);
    res.status(500).send("Server error.");
  }
}
