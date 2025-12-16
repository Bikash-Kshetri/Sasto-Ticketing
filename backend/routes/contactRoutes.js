// const express = require("express");
// const router = express.Router();
// const { submitInquiry } = require("../controllers/contactController");

// router.post("/", submitInquiry);

// module.exports = router;

// routes/contactRoutes.js


import express from "express";
const router = express.Router();

// Example POST route for contact form
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("New contact message received:", { name, email, message });

  res.status(200).json({ success: true, message: "Message received successfully" });
});

export default router;

