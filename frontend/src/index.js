import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/Signup/Signup"; // Corrected Singup to Signup
import About from "./landingPage/about/About";
import Product from "./landingPage/product/Product";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/Support/SupportPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFound from "./landingPage/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.Fragment>
);
