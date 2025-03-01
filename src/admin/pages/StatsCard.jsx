import React from "react";
import { Card } from "react-bootstrap";

const StatsCard = ({ icon: Icon, title, value, bgColor }) => {
  return (
    <Card className={`dashboard-card text-white shadow-lg bg-${bgColor}`}>
      <Card.Body>
        <Icon size={40} className="mb-2" />
        <h5>{title}</h5>
        <h3>{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
