import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
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

  // Handle message deletion
  const handleDelete = (contactId) => {
    axios
      .delete(`http://localhost:3000/api/user/contact/delete/${contactId}`)
      .then(() => {
        // Remove the deleted contact from the state
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact._id !== contactId)
        );
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td className="text-primary">{contact.message}</td>
                <td>
                  {contact.ignored ? (
                    <span className="text-danger">Ignored Message</span>
                  ) : contact.adminReply ? (
                    <span className="text-success">{contact.adminReply}</span>
                  ) : (
                    <span className="text-muted">No reply yet</span>
                  )}
                </td>
                <td>
                  {contact.ignored ? (
                    <span className="badge bg-danger">Ignored</span>
                  ) : contact.adminReply ? (
                    <span className="badge bg-success">Replied</span>
                  ) : (
                    <span className="badge bg-warning text-dark">Pending</span>
                  )}
                </td>
                <td>
                  {/* Delete Button */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
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
