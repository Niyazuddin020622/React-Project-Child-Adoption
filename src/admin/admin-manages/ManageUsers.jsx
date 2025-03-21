import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setUsers(data);
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
      setUsers(users.filter((user) => user._id !== selectedUser._id));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Users</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.fullName}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <span
                    className={`badge ${
                      user.status === "Active" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(user)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No users found.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageUsers;
