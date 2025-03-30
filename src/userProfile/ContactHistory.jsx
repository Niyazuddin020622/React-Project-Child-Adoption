import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactHistory() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get("http://localhost:3000/api/user/")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => console.error("Error fetching contact history:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Contact History</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Reply</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.message}</td>
                <td>
                  {contact.ignored ? (
                    <span className="text-danger">Ignored Message</span>
                  ) : contact.adminReply ? (
                    contact.adminReply
                  ) : (
                    <span className="text-muted">No reply</span>
                  )}
                </td>
                <td>
                  {contact.ignored ? (
                    <span className="text-danger">Ignored</span>
                  ) : contact.adminReply ? (
                    <span className="text-success">Replied</span>
                  ) : (
                    <span className="text-warning">Pending</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
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
