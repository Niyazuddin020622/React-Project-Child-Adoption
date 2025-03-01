import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Animate.css'; // Keep your animations

const ChildAdoptionLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
  });

  const handleLoginClick = () => {
    setIsLogin(false);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-4"
      style={{ backgroundImage: 'url(https://example.com/your-image.jpg)', backgroundSize: 'cover' }}
    >
      <div className="row w-100 max-w-4xl bg-white bg-opacity-90 p-4 rounded shadow-lg animate__animated animate__fadeIn">
        
        {/* Left Side Content */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold text-dark mb-3 animate__animated animate__fadeInLeft">Child Adoption</h2>
          <p className="text-muted mb-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Adopting a child brings joy and a new beginning for both the child and the parents.
            Start your adoption journey today!
          </p>
          <img
            alt="Child Adoption"
            src="https://precisionadvisory.com.au/wp-content/uploads/2015/12/happy-family-with-grandparents-children-1200x800.jpg"
            className="rounded shadow w-100 img-hover"
          />
        </div>

        {/* Login or OTP Form */}
        <div className="col-md-6 bg-white p-4 rounded shadow animate__animated animate__fadeInRight">
          <h2 className="text-center fw-bold mb-4">Login to Adopt</h2>

          {isLogin ? (
            <form>
              <div className="mb-3">
                <label htmlFor="full-name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control input-focus"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control input-focus"
                  required
                />
              </div>

              <div className="d-flex flex-column align-items-center">
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-hover"
                  onClick={handleLoginClick}
                >
                  Login
                </button>

                {/* Register Page Link */}
                <p className="mt-3 text-muted">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary text-decoration-none">
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  className="form-control input-focus"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success w-100 btn-hover">
                  Submit OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildAdoptionLogin;
