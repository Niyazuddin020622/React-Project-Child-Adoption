import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Sidebar.css";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>Profile</li>
        <li className={activeTab === "history" ? "active" : ""} onClick={() => setActiveTab("history")}>Adoption History</li>
        <li className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>Settings</li>
        <li className="logout" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
