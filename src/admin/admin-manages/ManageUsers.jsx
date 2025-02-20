import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageUsers = () => {
  // Dummy user data (Replace with API data)
  const users = [
    { id: 1, name: "John Doe", city: "New York", email: "john@example.com", mobile: "9876543210", status: "Active" },
    { id: 2, name: "Jane Smith", city: "Los Angeles", email: "jane@example.com", mobile: "9876543222", status: "Inactive" },
    { id: 3, name: "Alice Brown", city: "Chicago", email: "alice@example.com", mobile: "9876543333", status: "Active" }
  ];

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <span className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <Button variant="primary" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
