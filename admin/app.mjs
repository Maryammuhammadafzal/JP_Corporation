import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cardRoutes from "./routes/cardRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // React app
  credentials: true
}));

app.use(express.json());
app.use("/api/cards", cardRoutes);
app.use("api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes Example
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});