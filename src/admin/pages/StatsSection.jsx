import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaUsers, FaHourglassHalf, FaChild, FaCheckCircle } from "react-icons/fa";
import StatsCard from "./StatsCard";

const StatsSection = ({ usersCount, childrenCount, pendingCount, successCount }) => {
  return (
    <Row className="mt-4">
      <Col md={3}><StatsCard icon={FaUsers} title="Total Users" value={usersCount} bgColor="primary" /></Col>
      <Col md={3}><StatsCard icon={FaChild} title="Total Children" value={childrenCount} bgColor="info" /></Col>
      <Col md={3}><StatsCard icon={FaHourglassHalf} title="Pending Requests" value={pendingCount} bgColor="warning" /></Col>
      <Col md={3}><StatsCard icon={FaCheckCircle} title="Successful Adoptions" value={successCount} bgColor="success" /></Col>
    </Row>
  );
};

export default StatsSection;
