import React, { useState, useEffect } from "react";
import ChildDetailsAdmin from "../pages/ChildDetailsAdmin";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageChildren = () => {
  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState([]);
  const [filteredChildren, setFilteredChildren] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    fetchChildren();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();

    const filtered = children.filter((c) => {
      return (
        c.name?.toLowerCase().includes(term) ||
        c.gender?.toLowerCase().includes(term) ||
        c.location?.toLowerCase().includes(term) ||
        c.education?.toLowerCase().includes(term) ||
        c.age?.toString().includes(term) // Convert age to string and compare
      );
    });

    setFilteredChildren(filtered);
  }, [searchTerm, children]);

  const fetchChildren = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/children");
      const data = await response.json();
      setChildren(data);
      setFilteredChildren(data);
    } catch (error) {
      console.error("Error fetching children:", error);
    }
  };

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
        setShowModal(false);
        fetchChildren(); // refresh list
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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Total Children: {filteredChildren.length}</h4>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Search by name, location, gender, age, or education"
            className="form-control"
            style={{ width: "300px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add Children
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Child</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control mb-2"
                    value={child.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="form-control mb-2"
                    value={child.age}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="gender"
                    className="form-control mb-2"
                    value={child.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                  </select>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="form-control mb-2"
                    value={child.location}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="form-control mb-2"
                    value={child.photo}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    className="form-control mb-2"
                    value={child.description}
                    onChange={handleChange}
                  ></textarea>
                  <textarea
                    name="background"
                    placeholder="Background"
                    className="form-control mb-2"
                    value={child.background}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type="text"
                    name="hobbies"
                    placeholder="Hobbies (comma-separated)"
                    className="form-control mb-2"
                    value={child.hobbies}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="personality"
                    placeholder="Personality Traits (comma-separated)"
                    className="form-control mb-2"
                    value={child.personality}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    className="form-control mb-2"
                    value={child.education}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="languages"
                    placeholder="Languages (comma-separated)"
                    className="form-control mb-2"
                    value={child.languages}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="aspirations"
                    placeholder="Aspirations"
                    className="form-control mb-2"
                    value={child.aspirations}
                    onChange={handleChange}
                  />

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Child Details Table or Cards */}
      <ChildDetailsAdmin children={filteredChildren} />
    </div>
  );
};

export default ManageChildren;
