import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Badge } from "react-bootstrap";
import StatsSection from "./StatsSection";
import PendingAdoptionRequestsTable from "./PendingAdoptionRequestsTable";
import ApprovedAdoptionRequestsTable from "./ApprovedAdoptionRequestsTable";
import RejectedAdoptionRequestsTable from "./RejectedAdoptionRequestsTable";
import AdminAdoptionManagement from "./AdminAdoptionManagement";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [children, setChildren] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [successfulRequests, setSuccessfulRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await fetch("http://localhost:3000/api/users");
        const childrenRes = await fetch("http://localhost:3000/api/children");
        const adoptionRes = await fetch("http://localhost:3000/api/adoption");

        if (!usersRes.ok || !childrenRes.ok || !adoptionRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usersData = await usersRes.json();
        const childrenData = await childrenRes.json();
        const adoptionData = await adoptionRes.json();

        setUsers(usersData);
        setChildren(childrenData);

        setPendingRequests(adoptionData.filter((adoption) => adoption.status === "Pending"));
        setSuccessfulRequests(adoptionData.filter((adoption) => adoption.status === "Approved"));
        setRejectedRequests(adoptionData.filter((adoption) => adoption.status === "Rejected"));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 display-4">Admin Dashboard</h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <StatsSection
            usersCount={users.length}
            childrenCount={children.length}
            pendingCount={pendingRequests.length}
            successCount={successfulRequests.length}
            rejectedCount={rejectedRequests.length}
          />

          {/* Pending, Approved & Rejected Requests */}
          <PendingAdoptionRequestsTable pendingRequests={pendingRequests} />
          <ApprovedAdoptionRequestsTable successfulRequests={successfulRequests} />
          <RejectedAdoptionRequestsTable rejectedRequests={rejectedRequests} />

          {/* Adoption Management Component */}
          <AdminAdoptionManagement />
        </>
      )}
    </Container>
  );
};

export default AdminDashboard;
