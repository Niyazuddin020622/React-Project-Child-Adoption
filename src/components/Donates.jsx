import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Donates = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for donating ₹${amount}! Your support is invaluable.`);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section: Information */}
        <div className="col-md-6">
          <h2 className="mb-4 text-primary">Support Child Adoption</h2>
          <p className="text-muted">
            Every child deserves a loving home. Your contribution helps provide care, education, and legal assistance for adoption.
          </p>
          <ul className="list-group mb-3">
            <li className="list-group-item">Adoption services & legal aid</li>
            <li className="list-group-item">Medical care & mental health support</li>
            <li className="list-group-item">Educational resources & opportunities</li>
          </ul>
          <img
            src="https://img.freepik.com/free-photo/children-group_23-2148107402.jpg?t=st=1737996488~exp=1738000088~hmac=1bec177aa863875af23598bda31ae3df07fa37d62df1bcbda82f1c5928e94bdc&w=996"
            alt="Children in need"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Section: Donation Form */}
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="mb-4 text-center text-primary">Make a Donation</h3>
            <form onSubmit={handleDonate}>
              <div className="mb-3">
                <label htmlFor="donationAmount" className="form-label">
                  Donation Amount (₹)
                </label>
                <input
                  type="number"
                  id="donationAmount"
                  className="form-control"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="donorName" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="donorName"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select className="form-select" required>
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bankTransfer">Bank Transfer</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donates;
