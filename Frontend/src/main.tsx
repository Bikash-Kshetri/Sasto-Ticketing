import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./Page/home";
import About from "./Page/about";
import Contact from "./Page/contact";
import Vehicle from "./Page/vehicle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vehicles" element={<Vehicle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
