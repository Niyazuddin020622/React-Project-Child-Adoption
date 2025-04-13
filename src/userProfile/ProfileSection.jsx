import React, { useState } from "react";
import "./ProfileSection.css";

const ProfileSection = ({ user, setUser }) => {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || "https://via.placeholder.com/150"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [loading, setLoading] = useState(false);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/users/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        setIsEditing(false);
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while updating profile.");
      console.error("Error updating profile:", error);
    }
    setLoading(false);
  };

  return (
    <div className="profile-section " style={{marginBottom: "50px"}}>
      <label htmlFor="profileImageInput" className="profile-image-label">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </label>
      <input
        id="profileImageInput"
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="fullName"
            value={editedUser.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            disabled
            placeholder="Email"
          />
          <input
            type="text"
            name="dob"
            value={editedUser.dob}
            onChange={handleInputChange}
            required
          />
          <select name="gender" value={editedUser.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="tel"
            name="mobile"
            value={editedUser.mobile}
            onChange={handleInputChange}
            placeholder="Mobile Number"
          />
          <input type="text" name="region" value={editedUser.region} onChange={handleInputChange} placeholder="Region" />
          <input type="text" name="city" value={editedUser.city} onChange={handleInputChange} placeholder="City" />
          <button className="save-btn" onClick={handleSaveChanges} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      ) : (
        <div className="profile-info fade-in">
          <h2>{user.fullName}</h2>
          <p>{user.email}</p>
          <button className="edit-btn" onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
