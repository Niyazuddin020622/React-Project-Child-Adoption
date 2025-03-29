import React, { useState } from "react";

function EventRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration Successful!");
        setFormData({ fullName: "", email: "", event: "" });
      } else {
        const errorData = await response.json();
        alert(`Registration Failed! ${errorData.message || "Try again."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console for details.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Event Registration</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
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
          <label className="form-label">Email:</label>
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
          <label className="form-label">Select an Event:</label>
          <select
            name="event"
            className="form-select"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="">-- Select an Event --</option>
            <option value="Adoption Awareness Webinar">Adoption Awareness Webinar</option>
            <option value="Meet & Greet with Adoptive Parents">Meet & Greet with Adoptive Parents</option>
            <option value="Legal Adoption Process Workshop">Legal Adoption Process Workshop</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default EventRegister;
