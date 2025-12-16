// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ---- CORS CONFIG ---- //
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ---- GLOBAL PRE-FLIGHT HANDLER ---- //
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Handle preflight requests
  }

  next();
});

// ---- PARSERS ---- //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- TEST ROUTE ---- //
app.get("/", (req, res) => {
  res.send("🚀 Backend Running...");
});

// ---- API ROUTES ---- //
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// ---- SERVER PORT ---- //
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
