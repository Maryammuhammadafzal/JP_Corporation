import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import { Routes, Route, BrowserRouter } from "react-router";
import FAQPage from "./Pages/FAQPage/FAQPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import BankDetailPage from "./Pages/BankDetailPage/BankDetailPage";
import CardPage from "./Pages/CardPage/CardPage";
import AdminLogin from "./Pages/AdminPage/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/AdminPage/AdminDashboard/AdminDashboard";
import AddListing from "./Pages/AdminPage/AddListing/AddListing";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bank" element={<BankDetailPage />} />
          <Route path="/listing/:id" element={<CardPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/listing/add-listing" element={<AddListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
