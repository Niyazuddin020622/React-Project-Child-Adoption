import React, { useState } from "react";
import { Table, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ViewReports.css";

const ViewReports = () => {
  const [reportType, setReportType] = useState("adoption");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const reports = {
    adoption: [
      { id: 101, user: "John Doe", child: "Alice (5 years)", status: "Approved" },
      { id: 102, user: "Jane Smith", child: "Bob (6 years)", status: "Pending" },
      { id: 103, user: "Michael Lee", child: "Emma (4 years)", status: "Rejected" }
    ],
    donations: [
      { id: 201, donor: "Alice Johnson", amount: "$200", date: "2024-02-10" },
      { id: 202, donor: "David Brown", amount: "$500", date: "2024-02-12" }
    ],
    users: [
      { id: 301, name: "Chris Evans", status: "Active" },
      { id: 302, name: "Emma Watson", status: "Banned" }
    ]
  };

  return (
    <Container className="view-reports-container">
      <h2 className="text-center mt-4">View Reports</h2>

      {/* ✅ Filters */}
      <Row className="mb-4 filters">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Report Type</Form.Label>
            <Form.Select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="adoption">Adoption Reports</option>
              <option value="donations">Donation Reports</option>
              <option value="users">User Reports</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Form.Group>
        </Col>

        <Col md={3} className="d-flex align-items-end">
          <Button variant="primary">Filter</Button>
        </Col>
      </Row>

      {/* ✅ Report Table */}
      <Table striped bordered hover responsive className="custom-table">
        <thead className="table-dark">
          {reportType === "adoption" && (
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Child</th>
              <th>Status</th>
            </tr>
          )}
          {reportType === "donations" && (
            <tr>
              <th>ID</th>
              <th>Donor</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          )}
          {reportType === "users" && (
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          )}
        </thead>
        <tbody>
          {reports[reportType].map((report) => (
            <tr key={report.id}>
              {Object.values(report).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ✅ Export Buttons */}
      <div className="export-buttons mt-3">
        <Button variant="success" className="me-2">Export as PDF</Button>
        <Button variant="info">Export as Excel</Button>
      </div>
    </Container>
  );
};

export default ViewReports;
