import React, { useState, useEffect } from "react";
import "../CSS/Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",  // Changed fullName to name
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  // Auto-fill name and email for logged-in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullName || "",  // Changed fullName to name
        email: user.email || "",
      }));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = JSON.parse(localStorage.getItem("user"));
    const updatedFormData = {
      ...formData,
      name: user?.fullName || formData.name, // Changed fullName to name
      email: user?.email || formData.email,
    };
  
    try {
      const response = await fetch("http://localhost:3000/api/user/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ ...formData, message: "" });
      } else {
        setResponseMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setResponseMessage("Server error, please try again later");
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header text-center py-5 position-relative">
        <div className="running-text">
          <span>
            "Adopting one child won’t change the world, but for that child, the world will change forever. ❤" 
            &nbsp; | &nbsp; "Every child deserves a loving home. Adopt and make a difference. 🏡"
          </span>
        </div>
        <div
          className="header-background"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1615723411974-ed6cf1a6180a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
            filter: "brightness(0.7)",
          }}
        ></div>

        <div className="header-content position-absolute top-50 start-50 translate-middle text-white">
          <h1 className="display-4 fw-bold">Get in Touch</h1>
          <p className="text-light fs-5">We'd love to hear from you!</p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              title="Agency Location"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-lg p-4 border-0">
              <h3 className="mb-4">Send Us a Message</h3>
              {responseMessage && <p className="alert alert-info">{responseMessage}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="social-media-section text-center py-4 bg-light">
        <h3 className="mb-3">Follow Us</h3>
        <div>
          <a href="https://facebook.com/adoptionagency" className="btn btn-outline-primary mx-2">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://instagram.com/adoptionagency" className="btn btn-outline-danger mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
