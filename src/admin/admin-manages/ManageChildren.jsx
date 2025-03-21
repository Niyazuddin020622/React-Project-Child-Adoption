import React, { useState } from "react";
import ChildDetailsAdmin from "../pages/ChildDetailsAdmin";
const ManageChildren = () => {
  const [child, setChild] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    photo: "",
    description: "",
    background: "",
    hobbies: "",
    personality: "",
    education: "",
    languages: "",
    aspirations: "",
  });

  const handleChange = (e) => {
    setChild({ ...child, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedChild = {
      ...child,
      age: Number(child.age),
      hobbies: child.hobbies.split(","),
      personality: child.personality.split(","),
      languages: child.languages.split(","),
    };

    try {
      const response = await fetch("http://localhost:3000/api/children", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedChild),
      });

      if (response.ok) {
        alert("Child added successfully!");
        setChild({
          name: "",
          age: "",
          gender: "",
          location: "",
          photo: "",
          description: "",
          background: "",
          hobbies: "",
          personality: "",
          education: "",
          languages: "",
          aspirations: "",
        });
      } else {
        alert("Failed to add child");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Manage Children</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light"  style={{ max: "1000px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={child.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="age" value={child.age} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-control" name="gender" value={child.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" value={child.location} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Photo URL</label>
          <input type="text" className="form-control" name="photo" value={child.photo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={child.description} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Background</label>
          <textarea className="form-control" name="background" value={child.background} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Hobbies (comma-separated)</label>
          <input type="text" className="form-control" name="hobbies" value={child.hobbies} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Personality Traits (comma-separated)</label>
          <input type="text" className="form-control" name="personality" value={child.personality} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Education</label>
          <input type="text" className="form-control" name="education" value={child.education} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Languages (comma-separated)</label>
          <input type="text" className="form-control" name="languages" value={child.languages} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Aspirations</label>
          <input type="text" className="form-control" name="aspirations" value={child.aspirations} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Add Child</button>
      </form>
      <ChildDetailsAdmin/>
    </div>
  );
};

export default ManageChildren;
