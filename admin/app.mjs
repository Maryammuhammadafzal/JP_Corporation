import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import modelRoutes from "./routes/modelRoutes.js"
import capLinksRoutes from "./routes/capLinksRoutes.js"
const PORT = process.env.PORT || 8800;
import path from 'path';
const app = express();
dotenv.config();

const allowedOrigins = [
  "https://jpcorporation-production.up.railway.app/api",
  // "http://localhost:5173",
  // "http://localhost:3000",
  // "http://localhost:5000",
  // "http://localhost:8000",
  // "http://localhost:8800",
  "https://jp-corporation-o2co.vercel.app/"
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
const __dirname = path.resolve();

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));

app.use("/api/cards", carRoutes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/capLinks" , capLinksRoutes)
app.use("/api/model" , modelRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes Example
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

