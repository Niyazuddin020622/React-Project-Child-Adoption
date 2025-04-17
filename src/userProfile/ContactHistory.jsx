import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactHistory() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;

    if (!userEmail) return;

    axios
      .get("http://localhost:3000/api/user/fetch")
      .then((response) => {
        const userMessages = response.data.filter(
          (contact) => contact.email === userEmail
        );
        setContacts(userMessages);
      })
      .catch((error) =>
        console.error("Error fetching contact history:", error)
      );
  }, []);

  const getReplyStatus = (reply) => {
    if (!reply) return <span className="badge bg-warning text-dark">Pending</span>;
    if (reply.trim().toLowerCase() === "ignore") {
      return <span className="badge bg-danger">Ignored</span>;
    }
    return <span className="badge bg-success">Replied</span>;
  };

  const getReplyText = (reply) => {
    if (!reply) return <span className="text-muted">No reply yet</span>;
    if (reply.trim().toLowerCase() === "ignore") {
      return <span className="text-danger">Ignored Message</span>;
    }
    return <span className="text-success">{reply}</span>;
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Contact History</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Your Message</th>
            <th>Admin's Reply</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td className="text-primary">{contact.message}</td>
                <td>{getReplyText(contact.adminReply)}</td>
                <td>{getReplyStatus(contact.adminReply)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No contact history found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactHistory;
