import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import AdoptionHistory from "./AdoptionHistory";
import ContactHistory from "./ContactHistory";
import DonationHistory from "./DonationHistory";

import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>User Profile</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="mt-3 d-flex gap-3">
        <button
          className={`btn ${activeTab === "profile" ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`btn ${activeTab === "history" ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
          onClick={() => setActiveTab("history")}
        >
          Adoption History
        </button>
        <button
          className={`btn ${activeTab === "contacthistory" ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
          onClick={() => setActiveTab("contacthistory")}
        >
          Contact History
        </button>
        <button
  className={`btn ${activeTab === "donation" ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
  onClick={() => setActiveTab("donation")}
>
  Donation History
</button>

      </div>

      <div className="mt-4 fade-in">
  {activeTab === "profile" && user && <ProfileSection user={user} setUser={setUser} />}
  {activeTab === "history" && user && <AdoptionHistory userId={user._id} />}
  {activeTab === "contacthistory" && user && <ContactHistory userId={user._id} />}
  {activeTab === "donation" && user && <DonationHistory userId={user._id} />}
</div>
    </div>
  );
};

export default UserProfile;
