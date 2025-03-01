import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaHourglassHalf, FaChild, FaCheckCircle } from "react-icons/fa";
import StatsCard from "./StatsCard";
import AgeChart from "./AgeChart";
import { fetchChildren, fetchUsers } from "../api/apiService";

const AdminDashboard = () => {
  const [children, setChildren] = useState([]);
  const [users, setUsers] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [successfulCount, setSuccessfulCount] = useState(0);

  useEffect(() => {
    fetchChildren().then(setChildren);
    fetchUsers().then((data) => {
      setUsers(data);
      setPendingCount(data.filter((user) => user.status === "pending").length);
      setSuccessfulCount(data.filter((user) => user.status === "successful").length);
    });
  }, []);

  // Group Ages into Ranges
  const ageGroups = { "0-5": 0, "6-10": 0, "11-15": 0 };
  children.forEach((child) => {
    if (child.age >= 0 && child.age <= 5) ageGroups["0-5"]++;
    else if (child.age >= 6 && child.age <= 10) ageGroups["6-10"]++;
    else if (child.age >= 11 && child.age <= 15) ageGroups["11-15"]++;
  });

  const ageData = Object.keys(ageGroups).map((key) => ({ ageRange: key, count: ageGroups[key] }));

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>


      {/* Statistics Cards */}
      <Row className="mt-4">
        <Col md={3}><StatsCard icon={FaUsers} title="Total Users" value={users.length} bgColor="primary" /></Col>
        <Col md={3}><StatsCard icon={FaChild} title="Total Children" value={children.length} bgColor="info" /></Col>
        <Col md={3}><StatsCard icon={FaHourglassHalf} title="Pending Requests" value={pendingCount} bgColor="warning" /></Col>
        <Col md={3}><StatsCard icon={FaCheckCircle} title="Successful Registrations" value={successfulCount} bgColor="success" /></Col>
      </Row>

      {/* Age Chart */}
      <Row className="mt-4">
        <Col md={12}><AgeChart ageData={ageData} /></Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
