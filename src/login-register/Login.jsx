import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Animate.css";

const ChildAdoptionLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [modalData, setModalData] = useState({ show: false, message: "", isSuccess: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

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
          <h2 className="text-center fw-bold mb-4">Login to Adopt</h2>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control mb-3" placeholder="Password" required />
            
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Login"}
            </button>

            <p className="mt-3 text-muted">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
            <p className="mt-2">
            <button type="button" className="btn btn-link p-0">
  <Link to="/forgot-password">Forgot Password?</Link>
</button>

            </p>
          </form>
        </div>
      </div>

      {/* Modal for Login Message without Close Button */}
      <Modal show={modalData.show} centered>
        <Modal.Header>
          <Modal.Title>{modalData.isSuccess ? "✅ Success" : "❌ Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.message}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ChildAdoptionLogin;