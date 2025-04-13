import React from "react";
import { Table } from "react-bootstrap";

const RejectedAdoptionRequestsTable = ({ rejectedRequests }) => {
  return (
    <>
      <h3 className="mt-4">Rejected Adoption Requests</h3> {/* ✅ Corrected heading */}
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
            <th>Rejected Date</th>
          </tr>
        </thead>
        <tbody>
          {rejectedRequests.map((request, index) => (
            <tr key={request._id || index}> {/* ✅ Added fallback key */}
              <td>{index + 1}</td> {/* ✅ Sequential numbering */}
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

export default RejectedAdoptionRequestsTable;
