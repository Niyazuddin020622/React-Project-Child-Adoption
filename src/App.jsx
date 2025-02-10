import React from "react";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import Home from "./pages/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Adoption from "./components/AdoptionResources";
import AvailableChildren from "./components/AvailableChildren";
import ChildDetails from "./components/ChildDetails";
import Gallery from "./GalleryPages/Gallery";
import AdoptNow from  "./components/AdoptNow";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        
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
