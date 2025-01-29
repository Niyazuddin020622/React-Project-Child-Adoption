
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Contact from "./components/Contact";
import Adoption from "./components/AdoptionResources";
import Donates from "./components/Donates";
import Gallery from './components/Gallery';


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
      <Route path="/adoption-resources" element={<Adoption />} />

      
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;
