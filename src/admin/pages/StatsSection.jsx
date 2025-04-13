import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaUsers, FaHourglassHalf, FaChild, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import StatsCard from "./StatsCard";

const StatsSection = ({ usersCount, childrenCount, pendingCount, successCount, rejectedCount }) => {
  return (
    <Row className="mt-5 justify-content-center">
      <Col md={2}><StatsCard icon={FaUsers} title="Total Users" value={usersCount} bgColor="primary" /></Col>
      <Col md={2}><StatsCard icon={FaChild} title="Total Children" value={childrenCount} bgColor="info" /></Col>
      <Col md={2}><StatsCard icon={FaHourglassHalf} title="Pending Requests" value={pendingCount} bgColor="warning" /></Col>
      <Col md={3}><StatsCard icon={FaCheckCircle} title="Successful Adoptions" value={successCount} bgColor="success" /></Col>
      <Col md={3}><StatsCard icon={FaTimesCircle} title="Rejected Adoptions" value={rejectedCount} bgColor="danger" /></Col>
    </Row>
  );
};

export default StatsSection;
