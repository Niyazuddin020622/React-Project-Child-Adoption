import React from "react";
import "../CSS/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link className="nav-link text-orange" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-orange" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-orange" to="/contact">
                Contact_Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-orange" to="/available-children">
                Available_Children
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-orange" to="/adoption-resources">
                Adoption_Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-orange" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-orange"
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
            <button className="btn btn-outline-orange" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-orange ms-3" type="button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
