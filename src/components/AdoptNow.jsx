import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../CSS/AdoptionNow.css";

const AdoptNow = () => {
  const { id } = useParams();
  const location = useLocation();
  const [child, setChild] = useState(location.state?.child || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    income: "",
    maritalStatus: "",
    adoptionReason: "",
    idProof: null,
    incomeProof: null,
    medicalReport: null,
    agreeTerms: false,
  });

  useEffect(() => {
    if (!child) {
      fetch(`http://localhost:3000/api/children/${id}`)
        .then((res) => res.json())
        .then((data) => setChild(data))
        .catch((err) => console.error("Error fetching child details:", err));
    }
  }, [id, child]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("You must agree to the terms before submitting.");
      return;
    }

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:3000/api/adoptionform", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();
      if (response.ok) {
        setFormSubmitted(true);
        alert("🎉 Adoption application submitted successfully! Please proceed to payment.");
      } else {
        alert(`Failed to submit application: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  if (!child) {
    return <h2>Loading child details...</h2>;
  }

  return (
    <div className="adopt-now-container">
      <h2>Adopt {child.name}</h2>
      <img src={child.photo} alt={child.name} className="child-photo" />
      <p><strong>Location:</strong> {child.location}</p>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="adoption-form">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
          <input type="number" name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange} required />
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
          <textarea name="adoptionReason" placeholder="Why do you want to adopt?" value={formData.adoptionReason} onChange={handleChange} required />

          <input type="file" name="idProof" onChange={handleChange} required />
          <input type="file" name="incomeProof" onChange={handleChange} required />
          <input type="file" name="medicalReport" onChange={handleChange} required />

           
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <input style={{ width: "auto" }} type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
              I agree to the adoption policies.
            </label>
          <button type="submit">Submit Application</button>
        </form>
      ) : (
        <div className="payment-section">
          <h3>Your application has been submitted ✅</h3>
          <p>Proceed with the payment to complete the adoption process.</p>
          <button onClick={() => alert("Redirecting to payment gateway...")}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default AdoptNow;
