import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageDonations = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDonations();
  }, []);

  useEffect(() => {
    const filtered = donations.filter((donation) => {
      const term = searchTerm.toLowerCase();
      return (
        donation.donorName?.toLowerCase().includes(term) ||
        donation.email?.toLowerCase().includes(term) ||
        donation.phone?.toLowerCase().includes(term) ||
        donation.donationType?.toLowerCase().includes(term) ||
        donation.paymentMethod?.toLowerCase().includes(term)
      );
    });
    setFilteredDonations(filtered);
  }, [searchTerm, donations]);

  const fetchDonations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/donations");
      const result = await response.json();
      console.log("API Response:", result); // ✅ Debugging ke liye

      if (result.success) {
        setDonations(result.data);
        setFilteredDonations(result.data); // Initialize filtered donations with all donations
      }
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Donations</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
  <input
    type="text"
    placeholder="Search by donor name...."
    className="form-control"
    style={{
      width: "300px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "25px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      borderColor: "#ccc"
    }}
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <div
    style={{
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "25px",
      fontSize: "16px"
    }}
  >
    Total Donors: {filteredDonations.length}
  </div>
</div>


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
          {filteredDonations.length > 0 ? (
            filteredDonations.map((donation) => (
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
