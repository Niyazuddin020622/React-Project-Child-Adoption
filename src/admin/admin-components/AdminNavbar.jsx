import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AdminNavbar.css';
import { Link, useNavigate } from 'react-router-dom';


function AdminNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

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
            <Nav.Link as={Link} to="/admin-dashboard" onClick={() => setExpanded(false)}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/manage-contact" onClick={() => setExpanded(false)}>Manage Contact</Nav.Link>
            <Nav.Link as={Link} to="/manage-users" onClick={() => setExpanded(false)}>Manage Users</Nav.Link>
            <Nav.Link as={Link} to="/manage-children" onClick={() => setExpanded(false)}>Manage Children</Nav.Link>
            <Nav.Link as={Link} to="/manage-donations" onClick={() => setExpanded(false)}>Manage Donations</Nav.Link>
            <Nav.Link as={Link} to="/manage-resources" onClick={() => setExpanded(false)}>Manage Resources</Nav.Link>
            <Nav.Link as={Link} to="/view-reports" onClick={() => setExpanded(false)}>View Reports</Nav.Link>
            
            <NavDropdown title="Settings" className="text-white fw-bold">
              <NavDropdown.Item as={Link} to="/admin-profile" onClick={() => setExpanded(false)}>Admin Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/change-password" onClick={() => setExpanded(false)}>Change Password</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/site-settings" onClick={() => setExpanded(false)}>Site Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Button variant="danger" className="ms-auto" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;