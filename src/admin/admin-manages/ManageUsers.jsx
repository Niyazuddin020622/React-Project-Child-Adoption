import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedUser) return;
    try {
      await fetch(`http://localhost:3000/api/users/${selectedUser._id}`, {
        method: "DELETE",
      });
      const updatedUsers = users.filter((user) => user._id !== selectedUser._id);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = users.filter((user) =>
      user.fullName?.toLowerCase().includes(value) ||
      user.city?.toLowerCase().includes(value) ||
      user.email?.toLowerCase().includes(value) ||
      user.mobile?.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Manage Users</h2>

      {/* ✅ Search and Total Users */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by name, email, mobile or city..."
            value={search}
            onChange={handleSearch}
          />
        </Col>
        <Col md={6} className="text-md-end mt-2 mt-md-0">
          <h5>Total Users: <span className="badge bg-primary">{filteredUsers.length}</span></h5>
        </Col>
      </Row>

      {/* ✅ Users Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.fullName}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(user)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No users found.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* ✅ Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <p>
              Are you sure you want to delete <strong>{selectedUser.fullName}</strong> (ID: {selectedUser._id})?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageUsers;
