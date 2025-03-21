import React, { useEffect, useState } from "react";

const AdminAdoptionHistory = () => {
  const [adoptionRequests, setAdoptionRequests] = useState([]);

  useEffect(() => {
    fetchAdoptionRequests();
  }, []);

  const fetchAdoptionRequests = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/history");
      if (response.ok) {
        const data = await response.json();
        setAdoptionRequests(data.adoptionHistory);
      } else {
        console.error("Failed to fetch adoption requests");
      }
    } catch (error) {
      console.error("Error fetching adoption requests:", error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3000/api/history/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchAdoptionRequests(); // ✅ Refresh data after update
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Admin Adoption Requests</h2>

      {adoptionRequests.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Child Name</th>
              <th>Parent Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adoptionRequests.map((req, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{req.child?.name || "N/A"}</td>
                <td>{req.fullName || "N/A"}</td>
                <td>{req.email || "N/A"}</td>
                <td>
                  <span
                    className={`badge ${
                      req.status === "Approved"
                        ? "bg-success"
                        : req.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td>
                  {req.status === "Pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => updateStatus(req._id, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => updateStatus(req._id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-muted">No pending adoption requests.</p>
      )}
    </div>
  );
};

export default AdminAdoptionHistory;
