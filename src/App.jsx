import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Donates from "./components/Donates";


const App = () => {
  return (
    <Router>

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donates" element={<Donates />} />
   
      
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;
