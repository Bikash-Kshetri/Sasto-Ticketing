const jwt = require("jsonwebtoken");

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  // HARD-CODED ADMIN
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // ⏱ TOKEN TIMEOUT
  );

  res.json({ token });
};
