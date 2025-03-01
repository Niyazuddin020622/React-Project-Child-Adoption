import React from "react";
import { Table, Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdoptionResource from "./AdoptionResource";

const AdminDashboard = () => {
  // Dummy data (Replace with API data)
  const totalUsers = 150;
  const pendingRequests = 10;
  const successfulAdoptions = 75;

  const adoptionRequests = [
    { id: 101, user: "John Doe", child: "Alice (5 years)", status: "Pending" },
    { id: 102, user: "Jane Smith", child: "Bob (6 years)", status: "Approved" },
    { id: 103, user: "Michael Lee", child: "Emma (4 years)", status: "Pending" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center">Admin Dashboard</h2>

      {/* Statistics Section */}
      <Row className="mt-4">
        <Col md={4} className="mb-3">
          <Card className="bg-primary text-white">
            <Card.Body aria-label="Total Users">
              <h5>Total Users</h5>
              <h3>{totalUsers}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="bg-warning text-dark">
            <Card.Body aria-label="Pending Requests">
              <h5>Pending Requests</h5>
              <h3>{pendingRequests}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="bg-success text-white">
            <Card.Body aria-label="Successful Adoptions">
              <h5>Successful Adoptions</h5>
              <h3>{successfulAdoptions}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Adoption Requests Table */}
      <div className="mt-4">
        <h4>Manage Adoption Requests</h4>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="table-dark">
              <tr>
                <th>Request ID</th>
                <th>User</th>
                <th>Child</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adoptionRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.user}</td>
                  <td>{request.child}</td>
                  <td>
                    <span
                      className={`badge ${
                        request.status === "Pending" ? "bg-warning" : "bg-success"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "Pending" && (
                      <>
                        <Button variant="success" size="sm" className="me-2">
                          Approve
                        </Button>
                        <Button variant="danger" size="sm">Reject</Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Additional Component */}
      <AdoptionResource />
    </Container>
  );
};

export default AdminDashboard;
