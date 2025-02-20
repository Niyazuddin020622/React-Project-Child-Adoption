import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ChildAdoptionRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    reason: "",
    agreeTerms: false,
    emailOTP: "",
    mobileOTP: "",
    isEmailVerified: false,
    isMobileVerified: false,
  });

  const [generatedEmailOTP, setGeneratedEmailOTP] = useState("");
  const [generatedMobileOTP, setGeneratedMobileOTP] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendEmailOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedEmailOTP(otp);
    alert(`Email OTP sent: ${otp}`);
  };

  const verifyEmailOTP = () => {
    if (formData.emailOTP === generatedEmailOTP) {
      setFormData({ ...formData, isEmailVerified: true });
      alert("Email Verified Successfully!");
    } else {
      alert("Invalid Email OTP");
    }
  };

  const sendMobileOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMobileOTP(otp);
    alert(`Mobile OTP sent: ${otp}`);
  };

  const verifyMobileOTP = () => {
    if (formData.mobileOTP === generatedMobileOTP) {
      setFormData({ ...formData, isMobileVerified: true });
      alert("Mobile Verified Successfully!");
    } else {
      alert("Invalid Mobile OTP");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isEmailVerified || !formData.isMobileVerified) {
      alert("Please verify Email and Mobile before submitting!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "800px" }}>
        <h2 className="text-center text-primary mb-4">
          Child Adoption Registration
        </h2>
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
            <div className="col-md-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={sendEmailOTP}
              >
                Send OTP
              </button>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="emailOTP"
                placeholder="Enter OTP"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={verifyEmailOTP}
              >
                Verify
              </button>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={sendMobileOTP}
              >
                Send OTP
              </button>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="mobileOTP"
                placeholder="Enter OTP"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={verifyMobileOTP}
              >
                Verify
              </button>
            </div>
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
          {/* Register Page Link */}
          <p className="mt-3 text-muted">
            i have already an account?{" "}
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
