import React from "react";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Adoption from "./components/AdoptionResources";
import AvailableChildren from "./components/AvailableChildren";
import ChildDetails from "./components/ChildDetails";
import Gallery from "./GalleryPages/Gallery";
import AdoptNow from  "./components/AdoptNow";
import Home from  "./components/Home";
import Login from "./login-register/Login";
import Register from "./login-register/Register";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adoption-resources" element={<Adoption />} />
        <Route path="/available-children" element={<AvailableChildren />} />
        <Route path="/child-details/:id" element={<ChildDetails />} />
        <Route path="/adopt-now" element={<AdoptNow />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
