import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');

  const handleLogin = () => {
    if (enrollmentNumber.trim() === '') {
      alert('Please enter your enrollment number');
    } else {
      alert(`Logging in with Enrollment Number: ${enrollmentNumber}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="enrollmentNumber" className="form-label">
              Enrollment Number
            </label>
            <input
              type="text"
              id="enrollmentNumber"
              className="form-control"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              placeholder="Enter your enrollment number"
            />
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to="/register" > Go to .Register</Link>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
