import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AdminProfile.css'; // Optional: Create this for custom styling
import { useNavigate } from 'react-router-dom';

function AdminProfile() {
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/admin-login");
    } else {
      // Fetch admin profile from API or dummy local data
      const mockAdmin = {
        name: "Admin User",
        email: "admin@example.com",
        role: "Super Admin",
        phone: "+1234567890",
        joined: "January 2024",
      };
      setAdminData(mockAdmin);
    }
  }, [navigate]);

  if (!adminData) return <p>Loading...</p>;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow p-4">
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="admin-avatar"
            />
            <Card.Body>
              <Card.Title>{adminData.name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {adminData.email}<br />
                <strong>Role:</strong> {adminData.role}<br />
                <strong>Phone:</strong> {adminData.phone}<br />
                <strong>Joined:</strong> {adminData.joined}
              </Card.Text>
              <Button variant="primary" onClick={() => alert('Edit Profile functionality coming soon!')}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminProfile;
