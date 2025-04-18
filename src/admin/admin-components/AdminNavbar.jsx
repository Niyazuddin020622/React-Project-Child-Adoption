import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function AdminNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Track the current location

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/admin-login"); // Unauthorized access restriction
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminToken"); // Remove session token
      sessionStorage.clear(); // Clear session storage
      navigate("/admin-login"); // Redirect to login page
      setExpanded(false);
    }
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      className="navbar-custom sticky-top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/admin-dashboard">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/955/473/original/happy-family-symbol-icon-logo-design-vector.jpg"
            alt="Admin Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarNav" />
        
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/admin-dashboard" 
              className={`${isActive('/admin-dashboard')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/manage-contact" 
              className={`${isActive('/manage-contact')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Manage Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/manage-users" 
              className={`${isActive('/manage-users')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Manage Users
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/manage-children" 
              className={`${isActive('/manage-children')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Manage Children
            </Nav.Link>
            {/* <Nav.Link 
              as={Link} 
              to="/manage-donations" 
              className={`${isActive('/manage-donations')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Manage Donations
            </Nav.Link> */}
            <Nav.Link 
              as={Link} 
              to="/manage-resources" 
              className={`${isActive('/manage-resources')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              Manage Resources
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/view-reports" 
              className={`${isActive('/view-reports')} fw-bold`} 
              onClick={() => setExpanded(false)}
            >
              View Reports
            </Nav.Link>
            
            <NavDropdown title="Settings" className="text-white fw-bold">
              <NavDropdown.Item 
                as={Link} 
                to="/admin-profile" 
                className={`${isActive('/admin-profile')} fw-bold`} 
                onClick={() => setExpanded(false)}
              >
                Admin Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Button variant="danger" className="ms-auto" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
