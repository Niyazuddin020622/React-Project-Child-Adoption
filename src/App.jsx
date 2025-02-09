
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";

import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import Adoption from "./components/AdoptionResources";
import Donates from "./components/Donates";
import Gallery from './components/Gallery';
import Login from './login-register/Login';

import Register from './login-register/Register';
import AdoptionStoryPage from './ParentsPages/AdoptionStoryPage';

const App = () => {
  return (
    <Router>



    <ScrollToTop />

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/donates" element={<Donates />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adoption-resources" element={<Adoption />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/register" element={<Register />} />
     
      <Route path="/adoption-stories" element={<AdoptionStoryPage />} />   
    </Routes> 
    <Footer />
  </Router>
  );
};

export default App;
