import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ChildDetailsAdmin = () => {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [childToDelete, setChildToDelete] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/children")
      .then((response) => response.json())
      .then((data) => setChildren(data))
      .catch((error) => console.error("Error fetching children:", error));
  }, []);

  const handleEdit = (child) => {
    setSelectedChild(child);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setSelectedChild({ ...selectedChild, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/children/${selectedChild._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(selectedChild),
        }
      );

      if (response.ok) {
        alert("Child details updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update child details");
      }
    } catch (error) {
      console.error("Error updating child details:", error);
      alert("Something went wrong");
    }
  };
  

  const handleDeleteClick = (child) => {
    setChildToDelete(child);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/children/${childToDelete._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setChildren(children.filter((c) => c.id !== childToDelete.id));
        alert("Child deleted successfully!");
      } else {
        alert("Failed to delete child");
      }
    } catch (error) {
      console.error("Error deleting child:", error);
      alert("Something went wrong");
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Children List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Photo</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child) => (
            <tr key={child.id}>
              <td>{child.name}</td>
              <td>{child.age}</td>
              <td>{child.gender}</td>
              <td>
                <img
                  src={child.photo}
                  alt={child.name}
                  className="child-photo"
                  style={{height:"60",width:"60px"}}
                />
              </td>

              <td>{child.location}</td> 
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(child)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(child)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedChild && (
        <div className="mt-4">
          <h2>Edit Child Details</h2>
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            {Object.keys(selectedChild).map(
              (key) =>
                key !== "id" && (
                  <div className="mb-3" key={key}>
                    <label className="form-label">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    {key === "gender" ? (
                      <select
                        className="form-control"
                        name={key}
                        value={selectedChild[key]}
                        onChange={handleChange}
                        disabled={!isEditing}
                      >
                        <option value="Boy">Boy</option>
                        <option value="Girl">Girl</option>
                      </select>
                    ) : key === "description" ? (
                      <textarea
                        className="form-control"
                        name={key}
                        value={selectedChild[key]}
                        onChange={handleChange}
                        disabled={!isEditing}
                      ></textarea>
                    ) : (
                      <input
                        type={
                          typeof selectedChild[key] === "number"
                            ? "number"
                            : "text"
                        }
                        className="form-control"
                        name={key}
                        value={selectedChild[key]}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    )}
                  </div>
                )
            )}
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            {isEditing && (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            )}
          </form>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowDeleteModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete{" "}
                  <strong>{childToDelete.name}</strong> (ID: {childToDelete._id}
                  )?
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildDetailsAdmin;
