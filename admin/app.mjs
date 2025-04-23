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
import connectDB from "./config/db.js";
const app = express();
dotenv.config();
const __dirname = path.resolve();

// const allowedOrigins = [

//   "https://jpcorporation-production.up.railway.app/",
//   // "http://localhost:5173",
//   // "http://localhost:5174",
//   // "http://localhost:3000",
//   // "http://localhost:5000",
//   // "http://localhost:8000",
//   // "http://localhost:8800",
//   "https://jp-corporation-o2co.vercel.app"
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,                 
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
const corsOptions = {
  origin: "https://jp-corporation-frontend.vercel.app" ,
  credentials: true,                 
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));





// Serve static frontend files
app.use(express.static(path.join(__dirname, '../dist')));
connectDB();


// Serve frontend only for non-API routes
// app.get('*', (req, res, next) => {
//   console.log(`Serving: ${req.path}`);
  
//   if (req.path.startsWith('/api')) {
//     return next(); 
//   }

//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

app.get('/', (req , res) => {
  res.send("Hello");
})

// Define an API route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'API route is working' });
});


app.use("/api/cards", carRoutes);
app.use("/api/dashboard" , dashboardRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/capLinks" , capLinksRoutes)
app.use("/api/model" , modelRoutes)
app.use("/api/contact" , contactRoutes)

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

