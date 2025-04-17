import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Modal,
  Form,
} from "react-bootstrap";
import "./AdminProfile.css";
import { useNavigate } from "react-router-dom";

function AdminProfile() {
  const [adminData, setAdminData] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("adminAvatar") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const adminEmail = localStorage.getItem("adminEmail");

    if (!adminToken || !adminEmail) {
      navigate("/admin-login");
      return;
    }

    const fetchAdminProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/admin/${adminEmail}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${adminToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch admin profile");
        }

        const data = await response.json();
        setAdminData(data);
        setFormData({ name: data.name, phone: data.phone || "" });

        // Use local avatar or fallback to DB avatar
        setAvatar(localStorage.getItem("adminAvatar") || data.avatar || "");
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, [navigate]);

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminAvatar"); // Optional: remove avatar on logout
    navigate("/admin-login");
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setError("");
    setSuccessMsg("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setAvatar(base64Image);
        localStorage.setItem("adminAvatar", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    if (!formData.name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    setUpdating(true);
    setError("");
    setSuccessMsg("");

    try {
      const adminToken = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:3000/api/admin/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ ...adminData, ...formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      const updatedData = await response.json();
      setAdminData(updatedData);
      setSuccessMsg("Profile updated successfully!");
      setTimeout(() => {
        setShowEditModal(false);
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error && !showEditModal) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow p-4 admin-profile-card">
            <Card.Img
              variant="top"
              src={
                avatar ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              className="admin-avatar"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />

            <Card.Body>
              <Card.Title className="mb-3 fs-3 fw-bold">
                {adminData.name}
              </Card.Title>
              <Card.Text className="text-start">
                <strong>Email:</strong> {adminData.email}
                <br />
                <strong>Role:</strong> {adminData.role}
                <br />
                <strong>Phone:</strong> {adminData.phone || "N/A"}
                <br />
                <strong>Joined:</strong>{" "}
                {new Date(adminData.createdAt).toLocaleDateString()}
                <br />
                <strong>Status:</strong> {adminData.status}
                <br />
                <strong>Last Login:</strong>{" "}
                {adminData.lastLogin
                  ? new Date(adminData.lastLogin).toLocaleString()
                  : "N/A"}
              </Card.Text>

              <div className="d-flex justify-content-between">
                <Button variant="primary" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Profile Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveChanges}
            disabled={updating}
          >
            {updating ? "Saving..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdminProfile;
