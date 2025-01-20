import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start bg-dark">
      {/* Grid container */}
      <div className="p-4">
        {/* Grid row */}
        <div className="row mt-4">
          {/* Grid column */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About company</h5>
            <p>
              LittleHaven is a compassionate and trusted child adoption organization dedicated to connecting children in need with loving families. We strive to create a safe haven for every child, ensuring they grow up in a nurturing and supportive environment. 
            </p>
            <p>
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
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
            <div className="form-outline form-white mb-4">
              <input
                type="text"
                id="formControlLg"
                className="form-control form-control-lg"
                placeholder="Search"
              />
            </div>
            <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-home"></i>
                </span>
                <span className="ms-2">Rajkot, Gujarat 360020</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="ms-2">child.adopted02@gmail.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="ms-2">+91 8825135461</span>
                <span className="ms-2">+91 6206173716</span>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <table className="table text-center text-white">
              <tbody className="fw-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 Copyright:
        <a className="text-white text-decoration-none" href="#" type="none">
          LittleHaven
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
