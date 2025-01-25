import React from "react";
<<<<<<< HEAD
import "../CSS/Navbar.css";
=======
import "../CSS/nav.css";
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
      }}
    >
=======
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/955/473/original/happy-family-symbol-icon-logo-design-vector.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/">
=======
              <Link className="nav-link text-orange" to="/">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                Home
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/about">
=======
              <Link className="nav-link text-orange" to="/about">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                About
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/contact">
=======
              <Link className="nav-link text-orange" to="/contact">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                Contact_Us
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/available-children">
=======
              <Link className="nav-link text-orange" to="/available-children">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                Available_Children
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/adoption-resources">
=======
              <Link className="nav-link text-orange" to="/adoption-resources">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                Adoption_Resources
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link text-white" to="/donate">
=======
              <Link className="nav-link text-orange" to="/donate">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                Donate
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
<<<<<<< HEAD
                className="nav-link dropdown-toggle text-white"
=======
                className="nav-link dropdown-toggle text-orange"
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parents
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/guide-to-adoption">
                    Guide to Adoption
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/parenting-tips">
                    Parenting Tips
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support-groups">
                    Support Groups
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/legal-resources">
                    Legal Resources
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption-stories">
                    Adoption Stories
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            <input
              className="form-control me-2 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
<<<<<<< HEAD
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-light ms-3" type="button">
=======
            <button className="btn btn-outline-orange" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-orange ms-3" type="button">
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
            Login
          </button>
        </div>
      </div>
<<<<<<< HEAD

      {/* Keyframes for Gradient Animation */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
=======
>>>>>>> 2e261e8781d08f5385685bc9e217a35fde08f806
    </nav>
  );
};

export default Navbar;
