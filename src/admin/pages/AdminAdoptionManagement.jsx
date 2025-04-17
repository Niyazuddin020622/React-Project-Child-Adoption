import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importing icons for search and clear functionality

const AdminAdoptionHistory = () => {
  const downloadExcel = () => {
    // Format the data for Excel
    const worksheetData = adoptionRequests.map((req, index) => ({
      SNo: index + 1,
      "Child Name": req.child?.name || "N/A",
      "Child Location": req.child?.location || "N/A",
      "Parent Name": req.fullName || "N/A",
      Email: req.email || "N/A",
      Phone: req.phone || "N/A",
      "User Address": req.address || "N/A",
      "Request Date": req.createdAt
        ? new Date(req.createdAt).toLocaleDateString()
        : "N/A",
      Status: req.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Adoption History");

    // Trigger the download
    XLSX.writeFile(workbook, "Adoption_History.xlsx");
  };

  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [notification, setNotification] = useState(null); // Notification state

  useEffect(() => {
    fetchAdoptionRequests();
  }, []);

  const fetchAdoptionRequests = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    const currentDate = new Date().toISOString(); // Get the current date in ISO format

    if (window.confirm("Are you sure you want to change the status?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/history/update/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              status: newStatus,
              approvedDate: currentDate, // Include the current date when approved
            }),
          }
        );

        if (response.ok) {
          // Update local state without refreshing the page
          setAdoptionRequests((prevRequests) =>
            prevRequests.map((req) =>
              req._id === id
                ? { ...req, status: newStatus, approvedDate: currentDate }
                : req
            )
          );

          setNotification({
            type: "success",
            message: `Adoption request has been ${newStatus.toLowerCase()} successfully!`,
          });
          setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
        } else {
          console.error("Failed to update status");
          setNotification({
            type: "error",
            message: "Failed to update status, please try again.",
          });
          setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
        }
      } catch (error) {
        console.error("Error updating status:", error);
        setNotification({
          type: "error",
          message: "An error occurred while updating the status.",
        });
        setTimeout(() => setNotification(null), 5000); // Hide notification after 5 seconds
      }
    }
  };

  // Filter requests based on search term
  const filteredRequests = adoptionRequests.filter(
    (req) =>
      req.child?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Admin Adoption Requests</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-primary" onClick={downloadExcel}>
          Download as Excel
        </button>
      </div>

      {/* Display Notification */}
      {notification && (
        <div
          className={`alert alert-${
            notification.type === "success" ? "success" : "danger"
          } alert-dismissible fade show`}
          role="alert"
        >
          {notification.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Child or Parent Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search"
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchTerm("")} // Clear search term
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : filteredRequests.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Child Name</th>
              <th>Child Location</th> {/* ✅ New Column */}
              <th>Parent Name</th>
              <th>Email</th>
              <th>Phone</th> {/* ✅ Added if needed */}
              <th>User Address</th> {/* ✅ New Column */}
              <th>Request Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req, index) => (
              <tr key={req._id || index}>
                <td>{index + 1}</td>
                <td>{req.child?.name || "N/A"}</td>
                <td>{req.child?.location || "N/A"}</td>
                <td>{req.fullName || "N/A"}</td>
                <td>{req.email || "N/A"}</td>
                <td>{req.phone || "N/A"}</td> {/* ✅ Optional */}
                <td>{req.address || "N/A"}</td> {/* ✅ User Address */}
                <td>
                  {req.createdAt
                    ? new Date(req.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
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
        <p className="text-center text-muted">
          No matching adoption requests found.
        </p>
      )}
    </div>
  );
};

export default AdminAdoptionHistory;
