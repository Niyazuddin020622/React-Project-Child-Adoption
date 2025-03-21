import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function AdoptionResource() {
  
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/resources")
      .then((response) => {
        setResources(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching adoption resources:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    alert(`Edit resource with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      axios
        .delete(`http://localhost:3000/resources/${id}`)
        .then(() => {
          setResources(resources.filter((resource) => resource._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
    }
  };

  if (loading) return <p className="text-center mt-4">Loading resources...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Adoption Resources</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              {/* <th>ID</th> */}
              <th style={{ width: "15%" }}>Title</th>
              <th style={{ width: "40%" }}>Description</th>
              <th>Button Name</th>
              <th>Button Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource._id}>
                {/* <td>{resource._id}</td> */}
                <td>{resource.title}</td>
                <td>{resource.description}</td>
                <td>{resource.buttonText}</td>
                <td>
                  <a
                    href={resource.link}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.buttonText}
                  </a>
                </td>
                <td>
                  
                  <Link
                    to={`/edit-resource/${resource._id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(resource._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default AdoptionResource;
