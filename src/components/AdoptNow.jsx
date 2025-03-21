import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../CSS/AdoptionNow.css";

const AdoptNow = ({ user }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [child, setChild] = useState(location.state?.child || null);

  // Ensure user data is fetched from localStorage if not passed via props
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const loggedInUser = user || storedUser;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: loggedInUser?.fullName || "",
    email: loggedInUser?.email || "",
    phone: "",
    address: "",
    occupation: "",
    adoptionReason: "",
    agreeTerms: false,
    userId: loggedInUser?._id || null, // Ensure userId is stored
    childId: id || null, // Store childId
  });

  useEffect(() => {
    console.log("Logged-in user:", loggedInUser);

    if (!child) {
      console.log("Fetching child details...");
      fetch(`http://localhost:3000/api/children/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched child data:", data);
          setChild(data);
          setFormData((prev) => ({ ...prev, childId: data._id })); // Update formData with childId
        })
        .catch((err) => console.error("Error fetching child details:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.agreeTerms) {
      alert("You must agree to the terms before submitting.");
      return;
    }
  
    // Ensure userId and childId are included
    const formSubmission = {
      ...formData,
      user: loggedInUser?._id,  // Add user ID
      child: child?._id,  // Add child ID
    };
  
    try {
      const response = await fetch("http://localhost:3000/api/adoptionform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formSubmission),
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        alert("🎉 Adoption application submitted successfully!");
        setTimeout(() => navigate("/available-children"), 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  
  if (!loggedInUser) {
    return <h2>Please login to adopt a child.</h2>;
  }

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
          <input type="text" name="fullName" value={formData.fullName} disabled />
          <input type="email" name="email" value={formData.email} disabled />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
          <textarea name="adoptionReason" placeholder="Why do you want to adopt?" value={formData.adoptionReason} onChange={handleChange} required />

          <label>
            <input type="checkbox"name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} style={{width:"20px"}}/>
            I agree to the adoption policies.
          </label>

          <button type="submit">Submit Application</button>
        </form>
      ) : (
        <h3>✅ Adoption application submitted successfully!</h3>
      )}
    </div>
  );
};

export default AdoptNow;
