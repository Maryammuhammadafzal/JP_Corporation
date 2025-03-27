import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import modelRoutes from "./routes/modelRoutes.js"
import capLinksRoutes from "./routes/capLinksRoutes.js"
import multer from "multer";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
},
  credentials: true,                 
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsOptions));
app.use(express.json())
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/cards", carRoutes);
app.use("/api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/capLinks" , capLinksRoutes)
app.use("/api/model" , modelRoutes)

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

