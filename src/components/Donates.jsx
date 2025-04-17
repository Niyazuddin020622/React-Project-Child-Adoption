// Donates.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/favicon.png"

const Donates = () => {
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("education");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Autofill from logged-in user
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setDonorName(user.fullName || "");
      setEmail(user.email || "");
    }
  }, []);

  const handleDonate = (e) => {
    e.preventDefault();

    if (!donorName || !email || !phone || !amount) {
      alert("Please fill all fields");
      return;
    }

    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay SDK not loaded yet. Please wait a moment.");
      return;
    }

    const options = {
      key: "rzp_test_vynt15lhzKMrgS", // Razorpay key here
      amount: amount * 100,
      currency: "INR",
      name: "Child Adoption Support",
      description: `Donation for ${donationType}`,
      image: {Logo},
      handler: function (response) {
        handlePaymentDone(response.razorpay_payment_id);
      },
      prefill: {
        name: donorName,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#28a745",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePaymentDone = async (paymentId) => {
    const donationData = {
      donorName,
      email,
      phone,
      amount,
      donationType,
      razorpayPaymentId: paymentId,
      paymentStatus: "Completed",
      paymentMethod: "Razorpay",
    };

    try {
      const response = await fetch("http://localhost:3000/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });
      const data = await response.json(); // 👈 Add this line
      if (response.ok) {
        alert("Thank you! Your donation has been received successfully.");
        setPhone("");
        setAmount("");
        setDonationType("education");
      } else {
        console.error("Donation failed:", data); // 👈 Log this to see the erro
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
            <li className="list-group-item">Adoption services & legal aid</li>
            <li className="list-group-item">Medical care & mental health support</li>
            <li className="list-group-item">Educational resources & opportunities</li>
          </ul>
          <img
            src="https://img.freepik.com/free-photo/children-group_23-2148107402.jpg"
            alt="Children in need"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h3 className="mb-4 text-center">Make a Donation</h3>
          <form onSubmit={handleDonate}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
                readOnly // Optional

              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                readOnly // Optional
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Donation Amount (₹)</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Donation Type</label>
              <select
                className="form-select"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                required
              >
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="food">Food</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Donate with Razorpay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donates;
