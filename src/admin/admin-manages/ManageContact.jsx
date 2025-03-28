import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageContact() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedReply, setSelectedReply] = useState("");
  const [ignoredContacts, setIgnoredContacts] = useState({});
  const [repliedContacts, setRepliedContacts] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => console.error("Error fetching contact data:", error));

    const ignored = JSON.parse(localStorage.getItem("ignoredContacts")) || {};
    setIgnoredContacts(ignored);
  }, []);

  const handleIgnore = (contactId) => {
    const updatedIgnoredContacts = { ...ignoredContacts, [contactId]: true };
    setIgnoredContacts(updatedIgnoredContacts);
    localStorage.setItem("ignoredContacts", JSON.stringify(updatedIgnoredContacts));
  };

  const handleReply = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleSendReply = async () => {
    if (!selectedReply) return alert("Please select a response!");
  
    try {
      console.log("Sending reply to:", selectedContact.email);
      console.log("Message:", selectedReply);
  
      const response = await axios.post("http://localhost:3000/api/user/reply", {
        contactId: selectedContact._id,
        message: selectedReply,
      });
  
      if (response.status === 200) {
        console.log("Reply sent successfully!");
        setRepliedContacts((prev) => ({ ...prev, [selectedContact._id]: true }));
        alert("Reply sent successfully!");
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error sending reply:", error.response?.data || error);
      alert("Failed to send reply. Check console for details.");
    }
  };
  

  const predefinedReplies = [
    "Thank you for reaching out!",
    "We have received your message.",
    "Our team will get back to you soon.",
    "Please check our FAQs for more info.",
    "Your request is being processed.",
    "We'll contact you shortly.",
    "Can you provide more details?",
    "Your issue is under review.",
    "We appreciate your patience.",
    "Thank you for your feedback!",
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Contacts</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
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
                <td>
                  {repliedContacts[contact._id] ? (
                    <span className="badge bg-success">Replied Successfully</span>
                  ) : ignoredContacts[contact._id] ? (
                    <span className="badge bg-secondary">Ignored</span>
                  ) : (
                    <>
                      <Button
                        variant="danger"
                        size="sm"
                        className="me-2"
                        onClick={() => handleIgnore(contact._id)}
                      >
                        Ignore
                      </Button>
                      <DropdownButton
                        title="Reply"
                        variant="primary"
                        size="sm"
                        className="d-inline-block"
                        onSelect={(reply) => setSelectedReply(reply)}
                      >
                        {predefinedReplies.map((reply, index) => (
                          <Dropdown.Item key={index} eventKey={reply}>
                            {reply}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                      <Button
                        variant="success"
                        size="sm"
                        className="ms-2"
                        onClick={() => handleReply(contact)}
                      >
                        Send
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact && (
            <p>
              Send the following reply to <strong>{selectedContact.name}</strong>?
              <br />
              <strong>Message:</strong> {selectedReply}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSendReply}>
            Confirm & Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManageContact;
