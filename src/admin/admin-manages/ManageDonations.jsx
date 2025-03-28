import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/donations");
      const result = await response.json();
      console.log("API Response:", result); // ✅ Debugging ke liye

      if (result.success) {
        setDonations(result.data);
      }
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Donations</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Donor Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Amount (₹)</th>
            <th>Donation Type</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {donations.length > 0 ? (
            donations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation._id}</td>
                <td>{donation.donorName}</td>
                <td>{donation.email}</td>
                <td>{donation.phone}</td>
                <td>₹{donation.amount}</td>
                <td>{donation.donationType}</td>
                <td>{donation.paymentMethod}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No donations found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageDonations;
