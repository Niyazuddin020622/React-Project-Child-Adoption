import React from "react";
import { Table } from "react-bootstrap";

const ApprovedAdoptionRequestsTable = ({ successfulRequests }) => {
  return (
    <>
      <h3 className="mt-4">Approved Adoption Requests</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Child Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Occupation</th>
            <th>Adoption Date</th>
          </tr>
        </thead>
        <tbody>
          {successfulRequests.map((request) => (
            <tr key={request._id}>
              {" "}
              {/* ✅ Unique key use karein */}
                <td>{request._id}</td>
              <td>{request.fullName}</td>
              <td>{request.child ? request.child.name : "N/A"}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.address}</td>
              <td>{request.occupation}</td>
              <td>{new Date(request.adoptionDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ApprovedAdoptionRequestsTable;
