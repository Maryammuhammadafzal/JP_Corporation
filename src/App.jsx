import React from "react";
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
import EditListing from "./Pages/AdminPage/EditListing/EditListing";
import ModalListing from "./Pages/AdminPage/ManageModal/ModalListing/ModalListing";
import EditModal from "./Pages/AdminPage/ManageModal/EditModal/EditModal";
import EditCapLinks from "./Pages/AdminPage/CapLinks/EditCapLinks/EditCapLinks";
import SearchPage from "./Pages/SearchPage/SearchPage";
import GenerateCapLinks from "./Pages/AdminPage/CapLinks/GenerateCapLinks/GenerateCapLinks";

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
          <Route path="/search" element={<SearchPage />} />
          <Route path="/listing/:id" element={<CardPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/listing/add-listing" element={<AddListing />} />
          <Route path="/listing/edit-listing/get/:id" element={<EditListing />} />
          <Route path="/dashboard/manage-modal" element={<AdminDashboard />} />
          <Route path="/model-listing/add-model-listing" element={<ModalListing />} />
          <Route path="/modal-listing/edit-modal-listing/get/:id" element={<EditModal />} />
          <Route path="/dashboard/cap-links" element={<AdminDashboard />} />
          <Route path="/cap-links-listing/add-cap-links-listing" element={<GenerateCapLinks />} />
          <Route path="/cap-links-listing/edit-cap-links-listing/get/:id" element={<EditCapLinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;