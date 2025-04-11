import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../CSS/nav.css";
import { FaUserCircle } from "react-icons/fa"; // User icon

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const checkUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };
    checkUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from local storage
    setUser(null); // Reset state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
      }}
    >
      <div
        className="container-fluid justify-content-between"
        style={{ gap: "15%" }}
      >
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/955/473/original/happy-family-symbol-icon-logo-design-vector.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Navbar Toggler */}
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
            {/* Navbar Links */}
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
                    location.pathname === item.path ? "active fw-bold" : ""
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
                 
                  
                  <Link className="dropdown-item" to="/adoption-stories">
                    Adoption Stories
                  </Link>
                  <Link className="dropdown-item" to="/guide-adopt">
                    Guide to Adoption
                  </Link>
                  <Link className="dropdown-item" to="/parenting-tips">
                    parenting tips
                  </Link>
                  <Link className="dropdown-item" to="/support-group">
                    support group
                  </Link>
                  <Link className="dropdown-item" to="/legal-reasource">
                  legal reasource
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* User Icon or Login Button */}
          <div className="d-flex align-items-center ms-auto">
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle size={20} className="me-1" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="ms-3">
                <button className="btn btn-light d-flex align-items-center">
                  <FaUserCircle size={20} className="me-1" /> Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
