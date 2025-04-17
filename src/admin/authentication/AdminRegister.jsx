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

  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordValid(validatePassword(value));
      setPasswordsMatch(value === admin.confirmPassword);
    }

    if (name === "confirmPassword") {
      setPasswordsMatch(admin.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !admin.name ||
      !admin.email ||
      !admin.password ||
      !admin.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!validatePassword(admin.password)) {
      setError("Password is not strong enough.");
      return;
    }

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
        setTimeout(() => {
          setLoading(false);
          alert("Admin registered successfully!");
          navigate("/admin-login");
        }, 6000); // Spinner shown for 6 seconds
      } else {
        setError(data.message || "Registration failed!");
        setLoading(false);
      }
    } catch (error) {
      setError("Something went wrong!");
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

              {loading && (
                <div className="d-flex justify-content-center mb-3">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

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
                    className={`form-control ${
                      passwordValid === false
                        ? "is-invalid"
                        : passwordValid === true
                        ? "is-valid"
                        : ""
                    }`}
                    value={admin.password}
                    onChange={handleChange}
                    required
                  />
                  <small className="form-text text-muted">
                    Must be 8+ characters, include a number, symbol & capital letter.
                  </small>
                  {passwordValid === false && (
                    <div className="invalid-feedback">Weak password ❌</div>
                  )}
                  {passwordValid === true && (
                    <div className="valid-feedback">Strong password ✅</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={`form-control ${
                      passwordsMatch === false
                        ? "is-invalid"
                        : passwordsMatch === true
                        ? "is-valid"
                        : ""
                    }`}
                    value={admin.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {passwordsMatch === false && (
                    <div className="invalid-feedback">Passwords do not match!</div>
                  )}
                  {passwordsMatch === true && (
                    <div className="valid-feedback">Passwords match ✅</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
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
