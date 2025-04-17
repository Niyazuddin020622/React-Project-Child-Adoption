import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Animate.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      const res = await axios.post("http://localhost:3000/api/send-otp", { email });
      setMessage({ text: res.data.message, type: "success" });
      setStep(2);
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Failed to send OTP",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      const res = await axios.post("http://localhost:3000/api/verify-otp", { email, otp });
      setMessage({ text: res.data.message, type: "success" });
      setStep(3);
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Failed to verify OTP",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setLoading(true);
    setMessage({ text: "", type: "" });
    try {
      const res = await axios.post("http://localhost:3000/api/reset-password", {
        email,
        newPassword,
      });
      setMessage({ text: res.data.message, type: "success" });
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Password reset failed",
        type: "danger",
      });
    } finally {
      setLoading(false);
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
          <h2 className="text-center fw-bold mb-4">Forgot Password</h2>

          {message.text && <Alert variant={message.type}>{message.text}</Alert>}

          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn btn-primary w-100"
                onClick={handleSendOTP}
                disabled={loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Send OTP"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control mb-3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button
                className="btn btn-success w-100"
                onClick={handleVerifyOTP}
                disabled={loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Verify OTP"}
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="password"
                placeholder="Enter new password"
                className="form-control mb-3"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                className="btn btn-warning w-100"
                onClick={handleResetPassword}
                disabled={loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Reset Password"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
