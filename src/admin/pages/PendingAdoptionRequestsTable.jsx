import React from "react";
import { Table } from "react-bootstrap";

const PendingAdoptionRequestsTable = ({ pendingRequests }) => {
  return (
    <>
      <h3 className="mt-4">Pending Adoption Requests</h3>
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
          {pendingRequests.map((request, index) => (
            <tr key={request._id || index}>
              {" "}
              {/* ✅ Ensures uniqueness */}
              <td>{request._id}</td>
              <td>{request.fullName}</td>
              <td>{request.child ? request.child.name : "N/A"}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.address}</td>
              <td>{request.occupation}</td>
              <td>{request.adoptionDate ? new Date(request.adoptionDate).toLocaleDateString() : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PendingAdoptionRequestsTable;
