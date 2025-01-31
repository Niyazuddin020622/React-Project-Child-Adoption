import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white text-center text-lg-start"
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
      }}
    >
      {/* Grid container */}
      <div className="p-4">
        {/* Grid row */}
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About company</h5>
            <p style={{ color: "white" }}>
              LittleHaven is a compassionate and trusted child adoption organization dedicated to connecting children in need with loving families. We strive to create a safe haven for every child, ensuring they grow up in a nurturing and supportive environment.
            </p>
            <p style={{ color: "white" }}>
              With a mission to build stronger communities through love and care, LittleHaven guides families through the adoption process with integrity and empathy. Our goal is to bring hope, happiness, and a brighter future to every child we serve.
            </p>

            <div className="mt-4">
              {/* Social Media Buttons */}
              <button type="button" className="btn btn-floating btn-light btn-lg mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg mx-1">
                <i className="fab fa-dribbble"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg mx-1">
                <i className="fab fa-google-plus-g"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li>Rajkot, Gujarat 360020</li>
              <li>child.adopted02@gmail.com</li>
              <li>+91 8825135461</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening Hours</h5>
            <p style={{color :"white" }}>Mon - Fri: 8am - 9pm</p>
            <p style={{color :"white" }}>Sat - Sun: 9am - 10pm</p>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 LittleHaven
      </div>

      {/* Keyframes for Gradient Animation */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
