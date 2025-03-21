import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Animate.css";

const ChildAdoptionLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [modalData, setModalData] = useState({ show: false, message: "", isSuccess: false });
  const [forgotPasswordStep, setForgotPasswordStep] = useState(0); // Default to 0 to hide the modal
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "", otp: "", newPassword: "", confirmPassword: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", formData);
      if (response.data && response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setModalData({ show: true, message: "Login Successful!", isSuccess: true });
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3000);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      setModalData({ show: true, message: error.response?.data?.message || "Login failed!", isSuccess: false });
    }
  };

  const handleForgotPassword = async () => {
    if (forgotPasswordStep === 1) {
      // Step 1: Send OTP
      try {
        await axios.post("http://localhost:3000/api/send-otp", { email: forgotPasswordData.email });
        setForgotPasswordStep(2);
      } catch (error) {
        alert("Failed to send OTP");
      }
    } else if (forgotPasswordStep === 2) {
      // Step 2: Verify OTP
      try {
        await axios.post("http://localhost:3000/api/verify-otp", { email: forgotPasswordData.email, otp: forgotPasswordData.otp });
        setForgotPasswordStep(3);
      } catch (error) {
        alert("Invalid OTP");
      }
    } else if (forgotPasswordStep === 3) {
      // Step 3: Reset Password
      if (forgotPasswordData.newPassword !== forgotPasswordData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        await axios.post("http://localhost:3000/api/reset-password", forgotPasswordData);
        alert("Password reset successful");
        setForgotPasswordStep(0); // Close the modal after reset
      } catch (error) {
        alert("Failed to reset password");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-4">
      <div className="row w-100 max-w-4xl bg-white p-4 rounded shadow-lg">
        <div className="col-md-6 text-center">
          <h2 className="fw-bold text-dark mb-3">Child Adoption</h2>
          <img
            alt="Child Adoption"
            src="https://precisionadvisory.com.au/wp-content/uploads/2015/12/happy-family-with-grandparents-children-1200x800.jpg"
            className="rounded shadow w-100"
          />
        </div>

        <div className="col-md-6 bg-white p-4 rounded shadow">
          <h2 className="text-center fw-bold mb-4">Login to Adopt</h2>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control mb-3" placeholder="Password" required />
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <p className="mt-3 text-muted">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
            <p className="mt-2">
              <button type="button" className="btn btn-link p-0" onClick={() => setForgotPasswordStep(1)}>Forgot Password?</button>
            </p>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal show={forgotPasswordStep > 0} onHide={() => setForgotPasswordStep(0)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {forgotPasswordStep === 1 && (
            <>
              <input type="email" placeholder="Enter your email" className="form-control mb-3" value={forgotPasswordData.email} onChange={(e) => setForgotPasswordData({ ...forgotPasswordData, email: e.target.value })} />
            </>
          )}
          {forgotPasswordStep === 2 && (
            <>
              <input type="text" placeholder="Enter OTP" className="form-control mb-3" value={forgotPasswordData.otp} onChange={(e) => setForgotPasswordData({ ...forgotPasswordData, otp: e.target.value })} />
            </>
          )}
          {forgotPasswordStep === 3 && (
            <>
              <input type="password" placeholder="New Password" className="form-control mb-3" value={forgotPasswordData.newPassword} onChange={(e) => setForgotPasswordData({ ...forgotPasswordData, newPassword: e.target.value })} />
              <input type="password" placeholder="Confirm Password" className="form-control mb-3" value={forgotPasswordData.confirmPassword} onChange={(e) => setForgotPasswordData({ ...forgotPasswordData, confirmPassword: e.target.value })} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleForgotPassword}>{forgotPasswordStep === 3 ? "Reset Password" : "Next"}</Button>
          <Button variant="secondary" onClick={() => setForgotPasswordStep(0)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChildAdoptionLogin;
