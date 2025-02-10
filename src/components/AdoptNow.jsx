import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/AdoptionNow.css";

const AdoptNow = () => {
  const { state } = useLocation(); // Get the child details passed from the previous page
  const { name, age, photo } = state || {}; // Extract child data

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      {/* Background Image */}
      <div className="child-bg" style={{ backgroundImage: `url(${photo})` }}></div>

      <h2 className="text-center">📝 Adoption Form</h2>

      {submitted ? (
        <div className="alert alert-success text-center">
          ✅ Your adoption request has been submitted successfully!  
          <br /> We will contact you soon.  
          <Link to="/" className="btn btn-primary mt-3">🏠 Go to Home</Link>
        </div>
      ) : (
        <form className="adopt-form mt-4" onSubmit={handleSubmit}>
          {/* Display Child Info */}
          <div className="child-info mb-4 text-center">
            {photo && <img src={photo} alt={name} className="img-fluid rounded" style={{ width: "150px", height: "150px", objectFit: "cover" }} />}
            <h4>{name}</h4>
            <p><strong>Age:</strong> {age}</p>
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Why do you want to adopt?</label>
            <textarea
              name="reason"
              className="form-control"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Hidden Input for Child Details */}
          <input type="hidden" name="childName" value={name} />
          <input type="hidden" name="childAge" value={age} />

          {/* Buttons */}
          <button type="submit" className="btn btn-success">✅ Submit Request</button>
          <Link to="/available-children" className="btn btn-secondary ms-3">🔙 Back</Link>
        </form>
      )}
    </div>
  );
};

export default AdoptNow;
