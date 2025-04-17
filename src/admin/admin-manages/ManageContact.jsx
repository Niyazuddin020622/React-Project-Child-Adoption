import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageContact() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedReply, setSelectedReply] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/fetch");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const handleReply = (contact) => {
    setSelectedContact(contact);
    setSelectedReply(""); // Clear previous reply
    setShowModal(true);
  };

  const handleSendReply = async () => {
    if (!selectedReply.trim()) {
      return alert("Please enter a reply message!");
    }

    try {
      await axios.post("http://localhost:3000/api/user/reply", {
        contactId: selectedContact._id,
        message: selectedReply,
      });

      alert("Reply saved successfully!");
      setContacts((prev) =>
        prev.map((c) =>
          c._id === selectedContact._id
            ? { ...c, adminReply: selectedReply }
            : c
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error saving reply:", error);
      alert("Failed to save reply.");
    }
  };

  const getReplyStatus = (reply) => {
    if (!reply) return <span className="text-muted">No reply yet</span>;
    if (reply.trim().toLowerCase() === "ignore") {
      return <span className="badge bg-danger">Ignored</span>;
    }
    return (
      <>
        <span className="badge bg-success">Replied</span>
        <br />
        {reply}
      </>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Contacts</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Admin Reply</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>{getReplyStatus(contact.adminReply)}</td>
                <td>
                  {(!contact.adminReply ||
                    contact.adminReply.trim().toLowerCase() !== "ignore") && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleReply(contact)}
                    >
                      Reply
                    </Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Reply Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reply to Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact && (
            <>
              <p>
                <strong>To:</strong> {selectedContact.name} (
                {selectedContact.email})
              </p>
              <p>
                <strong>Message Received:</strong> {selectedContact.message}
              </p>
              <div className="mb-3">
                <label htmlFor="adminReply" className="form-label">
                  Your Reply:
                </label>
                <textarea
                  id="adminReply"
                  className="form-control"
                  rows="4"
                  placeholder="Type your reply here..."
                  value={selectedReply}
                  onChange={(e) => setSelectedReply(e.target.value)}
                ></textarea>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSendReply}>
            Send Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManageContact;
