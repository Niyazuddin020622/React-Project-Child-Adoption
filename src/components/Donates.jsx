import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Donates = () => {
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("education");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [paymentDone, setPaymentDone] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setPaymentDone(true);
  };

  // Backend pe data store karne ka function
  const handlePaymentDone = async () => {
    const donationData = { donorName, email, phone, amount, donationType, paymentMethod };
  
    try {
      const response = await fetch("http://localhost:3000/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });
  
      if (response.ok) {
        alert("Thank you! Your donation has been received successfully.");
        setPaymentDone(false);
        setDonorName("");
        setEmail("");
        setPhone("");
        setAmount("");
        setDonationType("education");
        setPaymentMethod("UPI");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  
  return (
    <div className="container my-5">
      <div className="row shadow rounded p-4 bg-white">
        <div className="col-md-6">
          <h2 className="mb-4 text-primary">Support Child Adoption</h2>
          <p className="text-muted">
            Your contribution will help children get the support, care, and legal assistance they need.
          </p>
          <ul className="list-group mb-3">
            <li className="list-group-item">Adoption services &amp; legal aid</li>
            <li className="list-group-item">Medical care &amp; mental health support</li>
            <li className="list-group-item">Educational resources &amp; opportunities</li>
          </ul>
          <img
            src="https://img.freepik.com/free-photo/children-group_23-2148107402.jpg"
            alt="Children in need"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          {!paymentDone ? (
            <>
              <h3 className="mb-4 text-center">Make a Donation</h3>
              <form onSubmit={handleDonate}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Donation Amount (₹)</label>
                  <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Donation Type</label>
                  <select className="form-select" value={donationType} onChange={(e) => setDonationType(e.target.value)} required>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="food">Food</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <select className="form-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success w-100">Proceed to Pay</button>
              </form>
            </>
          ) : (
            <>
              <h3 className="mb-4 text-center">Complete Your Payment</h3>
              <p><b>Donor:</b> {donorName}</p>
              <p><b>Amount:</b> ₹{amount}</p>
              <p><b>Payment Method:</b> {paymentMethod}</p>

              {paymentMethod === "UPI" ? (
                <>
                  <h4>Scan QR Code to Pay</h4>
                  <img src="https://w7.pngwing.com/pngs/619/184/png-transparent-qr-code-barcode-scanners-scanner-q-text-rectangle-logo.png" alt="QR Code for Payment" className="img-fluid rounded shadow" width="200" />
                  <h4 className="mt-4">OR Pay via UPI</h4>
                  <p className="text-muted">UPI ID: <b>99392473@ybl</b></p>
                </>
              ) : paymentMethod === "Cash" ? (
                <p className="text-success"><b>Please hand over the cash donation at our office.</b></p>
              ) : (
                <>
                  <h4 className="mt-4">Payment Gateway</h4>
                  <p className="text-muted">Redirecting to a secure payment gateway for {paymentMethod}...</p>
                </>
              )}

              <button onClick={handlePaymentDone} className="btn btn-success w-100">Payment Done</button>
              <br /><br />
              <button onClick={() => setPaymentDone(false)} className="btn btn-danger w-100">Cancel</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donates;
