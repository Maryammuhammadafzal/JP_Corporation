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
const PORT = process.env.PORT || 8800;
import path from 'path';
const app = express();
dotenv.config();


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`${process.env.MONGO_URI} MongoDB Connected`))
.catch((err) => console.log(err));

const allowedOrigins = [
  "https://jpcorporation-production.up.railway.app/",
  // "http://localhost:5173",
  // "http://localhost:5174",
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
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/api/cards", carRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/capLinks" , capLinksRoutes)
app.use("/api/model" , modelRoutes)
app.use("/api/contact" , contactRoutes)


const __dirname = path.resolve();
// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));


// Serve frontend only for non-API routes
app.get('*', (req, res, next) => {
  console.log(req.path);
  
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});;

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

