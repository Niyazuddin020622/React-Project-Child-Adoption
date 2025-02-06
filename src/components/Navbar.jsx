import "../CSS/nav.css"; // Ensure you have this file in your project
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72)",
        backgroundSize: "300% 300%",
        animation: "gradientBG 8s ease infinite",
        
      }}
    >
      <div className="container-fluid" style={{gap:"15%"}}>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/available-children"
              >
                Available_Children
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/adoption-resources">
                Adoption Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/donates">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gallery">
                Gallery
              </Link>
            </li>
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

          <form
            className="d-flex align-items-center ms-auto"
            style={{ marginRight: "50px" }}
          >
            
          </form>

          <button className="btn btn-dark " type="button">
          <Link className="dropdown-item" to="/login">
                   Login
                  </Link>
          </button>
        </div>
      </div>
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