import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";

const socket = io("http://localhost:3000");

const AdoptionHistory = ({ userId }) => {
  const [adoptionHistory, setAdoptionHistory] = useState([]);

  useEffect(() => {
    const fetchAdoptionHistory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/history/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setAdoptionHistory(data.adoptionHistory);
        } else {
          console.error("Failed to fetch adoption history");
        }
      } catch (error) {
        console.error("Error fetching adoption history:", error);
      }
    };

    fetchAdoptionHistory();

    socket.on("statusUpdated", ({ userId: updatedUserId, newStatus }) => {
      if (updatedUserId === userId) {
        setAdoptionHistory((prevHistory) =>
          prevHistory.map((adopted) =>
            adopted.userId === updatedUserId ? { ...adopted, status: newStatus } : adopted
          )
        );
      }
    });

    return () => {
      socket.off("statusUpdated");
    };
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Adoption History</h2>

      {adoptionHistory.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Child</th>
                <th>Details</th>
                <th>Adopter Info</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {adoptionHistory.map((adopted, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="d-flex align-items-center">
                    <img
                      src={adopted.child?.photo || "/default-child.png"}
                      alt={adopted.child?.name || "Child"}
                      className="rounded"
                      style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                    />
                    <div>
                      <strong>{adopted.child?.name || "N/A"}</strong>
                      <br />
                      <span>{adopted.child?.age} yrs • {adopted.child?.gender}</span>
                    </div>
                  </td>
                  <td>
                    <strong>Adopted On:</strong>{" "}
                    {adopted.adoptionDate
                      ? new Date(adopted.adoptionDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "N/A"}
                    <br />
                    <strong>Reason:</strong> {adopted.adoptionReason || "N/A"}
                    <br />
                    <strong>Terms:</strong> {adopted.agreeTerms ? "✅ Yes" : "❌ No"}
                  </td>
                  <td>
                    <strong>{adopted.fullName}</strong>
                    <br />
                    📧 {adopted.email}
                    <br />
                    📞 {adopted.phone}
                    <br />
                    🏠 {adopted.address}
                  </td>
                  <td className="text-center">
                    <span
                      className={`badge ${
                        adopted.status === "Approved"
                          ? "bg-success"
                          : adopted.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {adopted.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted">No adoptions yet.</p>
      )}
    </div>
  );
};

export default AdoptionHistory;
