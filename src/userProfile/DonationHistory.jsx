import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.email) {
      console.error("User not found or not logged in.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/api/donations?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setDonations(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading donation history...</p>;
  }

  if (donations.length === 0) {
    return <p>No donation history found.</p>;
  }

  return (
    <div className="table-responsive mt-3">
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
            <th>RazorpayPaymentId</th>
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
              <td>{donation.razorpayPaymentId}</td>
              <td>{donation.paymentStatus}</td>
              <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DonationHistory;
