import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ViewReports.css";
import * as XLSX from "xlsx";
import { FaUsers, FaDollarSign, FaChartBar, FaMedal } from "react-icons/fa";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

const ViewReports = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/donations")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setDonations(data.data);
        }
      })
      .catch((err) => console.error("Error fetching donations:", err));
  }, []);

  const totalDonors = new Set(donations.map((d) => d.donorName)).size;
  const totalDonationAmount = donations.reduce((sum, d) => sum + Number(d.amount), 0);
  const highestDonation = donations.reduce((max, d) => Math.max(max, Number(d.amount)), 0);

  // Most active donor
  const donorCount = {};
  donations.forEach((d) => {
    donorCount[d.donorName] = (donorCount[d.donorName] || 0) + 1;
  });
  const mostActiveDonor = Object.entries(donorCount).reduce(
    (max, [name, count]) => (count > max.count ? { name, count } : max),
    { name: "-", count: 0 }
  );

  const monthlySummary = donations.reduce((acc, d) => {
    const date = new Date(d.createdAt);
    const month = date.toLocaleString("default", { month: "long", year: "numeric" });
    acc[month] = (acc[month] || 0) + Number(d.amount);
    return acc;
  }, {});

  const monthlyChartData = Object.entries(monthlySummary).map(([month, total]) => ({
    month,
    total,
  }));

  const downloadExcel = () => {
    const donationsData = donations.map(donation => ({
      "Donor Name": donation.donorName,
      Email: donation.email,
      Phone: donation.phone,
      "Amount (₹)": donation.amount,
      "Donation Type": donation.donationType,
      "Payment Method": donation.paymentMethod,
      Status: donation.paymentStatus,
      Date: new Date(donation.createdAt).toLocaleDateString(),
    }));

    const monthlySummaryData = Object.entries(monthlySummary).map(([month, total]) => ({
      Month: month,
      "Total Donation (₹)": total,
    }));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(donationsData), "Donation Details");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(monthlySummaryData), "Monthly Summary");
    XLSX.writeFile(wb, "Donation_Report.xlsx");
  };

  return (
    <Container className="view-reports-container mt-4">
      <h2 className="text-center mb-4">View Reports</h2>

      {/* 🔢 Summary Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaUsers size={40} className="mb-3 text-primary" />
              <Card.Title>Total Donors</Card.Title>
              <Card.Text>{totalDonors}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaDollarSign size={40} className="mb-3 text-success" />
              <Card.Title>Total Donation</Card.Title>
              <Card.Text>₹{totalDonationAmount.toLocaleString()}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaMedal size={40} className="mb-3 text-warning" />
              <Card.Title>Highest Donation</Card.Title>
              <Card.Text>₹{highestDonation.toLocaleString()}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaChartBar size={40} className="mb-3 text-info" />
              <Card.Title>Top Donor</Card.Title>
              <Card.Text>{mostActiveDonor.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 📊 Monthly Donation Chart */}
      <h4 className="mt-4 mb-3">Monthly Donation Graph</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyChartData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Bar dataKey="total" fill="#28a745" />
        </BarChart>
      </ResponsiveContainer>

      {/* 📋 Donation Detail Table */}
      <h4 className="mt-5 mb-3">Donation Details</h4>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Donor Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Amount (₹)</th>
            <th>Donation Type</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={donation._id}>
              <td>{index + 1}</td>
              <td>{donation.donorName}</td>
              <td>{donation.email}</td>
              <td>{donation.phone}</td>
              <td>₹{donation.amount.toLocaleString()}</td>
              <td>{donation.donationType}</td>
              <td>{donation.paymentMethod}</td>
              <td>{donation.paymentStatus}</td>
              <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 📆 Monthly Summary Table */}
      <h4 className="mt-5 mb-3">Monthly Donation Summary</h4>
      <Table bordered responsive>
        <thead className="table-secondary">
          <tr>
            <th>Month</th>
            <th>Total Donation (₹)</th>
          </tr>
        </thead>
        <tbody>
          {monthlyChartData.map(({ month, total }, index) => (
            <tr key={index}>
              <td>{month}</td>
              <td>₹{total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 📥 Export Button */}
      <div className="mt-4 mb-5 text-center">
        <Button variant="success" className="me-3" onClick={downloadExcel}>
          Export as Excel
        </Button>
      </div>
    </Container>
  );
};

export default ViewReports;