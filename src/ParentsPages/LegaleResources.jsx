import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const LegalResources = () => {
  return (
    <>
      
      <div className="container mt-4">
        <h1 className="text-center">Child Adoption Legal Resources</h1>
        <p className="text-muted text-center">
          Know your rights and legal procedures for adopting a child.
        </p>

        {/* Adoption Laws Section */}
        <div className="card my-4 shadow">
          <div className="card-header bg-primary text-white">
            Adoption Laws & Regulations
          </div>
          <div className="card-body">
            <p>
              Adoption is a legal process governed by state and national laws. Here are the key aspects:
            </p>
            <ul>
              <li>Eligibility criteria for adoptive parents</li>
              <li>Legal rights of biological and adoptive parents</li>
              <li>Home study and background check requirements</li>
              <li>Process for finalizing the adoption in court</li>
            </ul>
            <Link to="/adoption-laws" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>

        {/* Adoption Agencies Section */}
        <div className="card my-4 shadow">
          <div className="card-header bg-success text-white">
            Find Adoption Agencies
          </div>
          <div className="card-body">
            <p>
              Looking for an accredited adoption agency? Check our list of licensed agencies that can guide you through the process.
            </p>
            <Link to="/adoption-agencies" className="btn btn-success">
              View Agencies
            </Link>
          </div>
        </div>

        {/* Support & Resources Section */}
        <div className="card my-4 shadow">
          <div className="card-header bg-warning text-dark">
            Support & Resources
          </div>
          <div className="card-body">
            <p>We offer legal resources, counseling, and community support for adoptive parents.</p>
            <Link to="/adoption-support" className="btn btn-warning">
              Get Support
            </Link>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default LegalResources;
