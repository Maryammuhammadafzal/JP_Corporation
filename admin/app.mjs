import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import modelRoutes from "./routes/modelRoutes.js"
import capLinksRoutes from "./routes/capLinksRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import connectToDb from "./db/db.js";
const app = express();
dotenv.config();

const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5173",
  "http://localhost:3000",
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

app.use("/api/cards", carRoutes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/capLinks" , capLinksRoutes)
app.use("/api/model" , modelRoutes)
app.use("/api/contact" , contactRoutes)

// connect to db
connectToDb();

// Routes Example
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Server Start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

