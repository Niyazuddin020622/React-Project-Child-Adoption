import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../CSS/ChildDetails.css";

const ChildDetails = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/children/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChild(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching child details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading child details...</h2>;
  }

  if (!child) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">🚫 Child Not Found</h2>
        <p className="text-muted">
          The child you are looking for doesn't exist or may have been adopted.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Not Found"
          className="img-fluid not-found-img"
        />
        <Link to="/available-children" className="btn btn-primary mt-3">
          🔙 Back to Available Children
        </Link>
      </div>
    );
  }

  return (
    <div className="child-details-container">
      <div className="child-profile-card">
        {/* Child Image */}
        <div>
          <img
            src={child.photo}
            alt={`${child.name}'s photo`}
            className="child-details-img"
          />
        </div>

        {/* Child Details */}
        <div className="child-details-info">
          <h2 className="child-name">{child.name}</h2>
          <p className="child-age">({child.age} years old)</p>
          <p className="child-description">
            <strong>Location:</strong> {child.location}
          </p>
          <p className="child-description">
            <strong>Gender:</strong> {child.gender}
          </p>
          <p className="child-description">
            <strong>Education:</strong> {child.education}
          </p>
          <p className="child-description">
            <strong>Languages:</strong> {child.languages.join(", ")}
          </p>
          <p className="child-description">
            <strong>Hobbies:</strong> {child.hobbies.join(", ")}
          </p>
          <p className="child-description">
            <strong>Personality:</strong> {child.personality.join(", ")}
          </p>
          <p className="child-description">
            <strong>Aspirations:</strong> {child.aspirations}
          </p>
          <p className="child-description text-muted">
            <strong>Background:</strong> {child.background}
          </p>

          {/* Buttons */}
          <div className="btn-group">
            <Link to="/available-children" className="btn btn-secondary">
              🔙 Back to Available Children
            </Link>
            <Link
              to={`/adopt-now/${child._id}`} state={{ child }}// Correct route
              className="btn btn-success"
            >
              ✅ Proceed to Adopt
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDetails;
