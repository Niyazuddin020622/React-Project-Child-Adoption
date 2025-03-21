import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ChildAdoptionRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    city: "",
    email: "",
    password: "",
    mobile: "",
    region: "",
    agreeTerms: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/register", formData);
      setMessage(response.data.message);
      console.log("User Registered:", response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "800px" }}>
        <h2 className="text-center text-primary mb-4">Child Adoption Registration</h2>
        {message && <p className="alert alert-info">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" name="fullName" placeholder="Full Name" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <input type="date" name="dob" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <select name="gender" className="form-control" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <input type="text" name="city" placeholder="City" className="form-control" onChange={handleChange} required />
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <input type="password" name="password" placeholder="Password" className="form-control" onChange={handleChange} required />
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <input type="text" name="mobile" placeholder="Mobile Number" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <textarea type="text" name="region" placeholder="why do you adopt" className="form-control" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-check mt-3">
            <input type="checkbox" name="agreeTerms" className="form-check-input" onChange={handleChange} required />
            <label className="form-check-label">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>

          <p className="mt-3 text-muted">
            Already have an account?{" "}
            <Link to="/login" className="text-primary text-decoration-none">Login Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChildAdoptionRegister;