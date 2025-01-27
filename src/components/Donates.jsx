import React, { useState } from "react";
import "../CSS/DonatePage.css";

const Donates = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for donating ₹${amount}! Your support is invaluable.`);
  };

  return (
    <div className="donate-container container my-5">
      <div className="row">
        {/* Left Section: Information */}
        <div className="col-md-6">
          <h2 className="mb-4 text-primary">Support Child Adoption</h2>
          <p className="text-muted">
            Every child deserves a loving home. Your contribution will help
            provide children with the support, care, and legal assistance they
            need to find a forever family.
          </p>
          <p>
            <strong>Why Donate?</strong> Your donations fund essential services:
          </p>
          <ul>
            <li>Adoption services and legal aid.</li>
            <li>Medical care and mental health support.</li>
            <li>Educational resources and opportunities.</li>
          </ul>
          <img
            src="https://img.freepik.com/free-photo/children-group_23-2148107402.jpg?t=st=1737996488~exp=1738000088~hmac=1bec177aa863875af23598bda31ae3df07fa37d62df1bcbda82f1c5928e94bdc&w=996"
            alt="Children in need"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Section: Donation Form */}
        <div className="col-md-6">
          <h3 className="mb-4 text-center">Make a Donation</h3>
          <form onSubmit={handleDonate} className="donation-form">
            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
              <label className="form-label">Payment Method</label>
              <select className="form-select" required>
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block donate-button"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donates;
