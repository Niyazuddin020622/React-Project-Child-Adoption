import React from "react";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Home from "./HomePages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Adoption from "./pages/AdoptionResources";
import AvailableChildren from "./pages/AvailableChildren";
import ChildDetails from "./pages/ChildDetails";
import Gallery from "./GalleryPages/Gallery";
import AdoptNow from  "./pages/AdoptNow";



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
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
