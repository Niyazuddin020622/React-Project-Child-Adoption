import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/nav.css";
const Navbar = () => {
  const location = useLocation(); // Get current route
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
      }}
    >
      <div className="container-fluid" style={{ gap: "15%" }}>
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
          <ul className="navbar-nav me-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact Us" },
              { path: "/available-children", label: "Available Children" },
              { path: "/adoption-resources", label: "Adoption Resources" },
              { path: "/donates", label: "Donate" },
              { path: "/gallery", label: "Gallery" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link text-white ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Parents Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parents
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    id="indianParentsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resident Indian Parents
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Already Registered Parents
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        New Register Parents
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption-stories">
                    Adoption Stories
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Login Button */}
          <Link to="/login" className="ms-auto">
            <button className="btn btn-light">Login</button>
          </Link>
        </div>
      </div>

      {/* CSS Fixes */}
      <style>{`
      .nav-link.active {
          font-weight: bold;
          border-bottom: 2px solid white;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Fix Bootstrap 5 Nested Dropdown */
        .dropdown-menu .dropdown-toggle::after {
          border-top: 0.3em solid transparent;
          border-right: 0;
          border-bottom: 0.3em solid transparent;
          border-left: 0.3em solid;
        }
        
        .dropdown-menu .dropdown-item.dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dropdown-menu .dropdown-menu {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
        }

        .dropdown-menu > .dropdown:hover > .dropdown-menu {
          display: block;
        }
      `}</style>
    </nav>
  );
};
export default Navbar;