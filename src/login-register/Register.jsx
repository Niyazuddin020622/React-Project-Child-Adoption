import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ChildAdoptionRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    reason: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "800px" }}>
        <h2 className="text-center text-primary mb-4">Child Adoption Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                name="dob"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <select
                name="gender"
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <textarea
              name="reason"
              placeholder="Why do you want to adopt?"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              name="agreeTerms"
              className="form-check-input"
              onChange={handleChange}
              required
            />
            <label className="form-check-label">
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Register
          </button>

          <p className="mt-3 text-muted">
            I already have an account? {" "}
            <Link to="/login" className="text-primary text-decoration-none">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChildAdoptionRegister;
