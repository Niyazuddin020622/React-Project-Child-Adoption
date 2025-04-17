import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import StatsSection from "./StatsSection";
import PendingAdoptionRequestsTable from "./PendingAdoptionRequestsTable";
import ApprovedAdoptionRequestsTable from "./ApprovedAdoptionRequestsTable";
import AdminAdoptionManagement from "./AdminAdoptionManagement";
import RejectedAdoptionRequestsTable from "./RejectedAdoptionRequestsTable";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [children, setChildren] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [successfulRequests, setSuccessfulRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);

  useEffect(() => {
    // Fetch users
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch children
    fetch("http://localhost:3000/api/children")
      .then((res) => res.json())
      .then(setChildren)
      .catch((error) => console.error("Error fetching children:", error));

    // Fetch adoption requests
    fetch("http://localhost:3000/api/adoption")
      .then((res) => res.json())
      .then((data) => {
        setPendingRequests(data.filter((adoption) => adoption.status === "Pending"));
        setSuccessfulRequests(data.filter((adoption) => adoption.status === "Approved"));
        setRejectedRequests(data.filter((adoption) => adoption.status === "Rejected"));
      })
      .catch((error) => console.error("Error fetching adoption requests:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {/* Statistics Section */}
      <StatsSection 
        usersCount={users.length} 
        childrenCount={children.length} 
        pendingCount={pendingRequests.length} 
        successCount={successfulRequests.length} 
        rejectedCount={rejectedRequests.length} 
      />

      {/* Pending & Approved Requests */}
      <PendingAdoptionRequestsTable pendingRequests={pendingRequests} />
      <ApprovedAdoptionRequestsTable successfulRequests={successfulRequests} />
      <RejectedAdoptionRequestsTable rejectedRequests={rejectedRequests} />

      {/* Adoption Management Component */}
      <AdminAdoptionManagement />
    </Container>
  );
};

export default AdminDashboard;
