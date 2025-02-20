import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AdminNavbar.css';

function AdminNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/logout");
      setExpanded(false);
    }
  };

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      className="navbar-custom"
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
