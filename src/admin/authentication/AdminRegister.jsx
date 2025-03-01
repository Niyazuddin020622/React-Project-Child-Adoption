import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (admin.password !== admin.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    setError("");
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:3000/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: admin.name,
          email: admin.email,
          password: admin.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Admin registered successfully!");
        setAdmin({ name: "", email: "", password: "", confirmPassword: "" });
        navigate("/admin-login"); // Redirect to login page
      } else {
        setError(data.message || "Registration failed!");
      }
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Admin Registration</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={admin.name}
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
                    value={admin.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={admin.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    value={admin.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input type="text" className="form-control" value="Admin" disabled />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account? <a href="/admin-login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
