import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";

function AdoptionSupport() {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">📞 Adoption Support Helpline</h2>
        <p className="text-muted">We’re here to assist you 24/7 with any adoption-related queries.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 p-4 text-center support-card">
            <FaHeadset size={50} className="text-primary mb-3" />
            <h4 className="fw-bold">Need Help? Contact Us</h4>
            <p className="text-muted">Our experts are ready to guide you through the adoption journey.</p>
            
            <div className="d-flex align-items-center justify-content-center my-3">
              <FaPhoneAlt size={20} className="text-success me-2" />
              <a href="tel:+18001234567" className="text-dark fw-bold fs-5">+1 800 123 4567</a>
            </div>

            <div className="d-flex align-items-center justify-content-center my-3">
              <FaEnvelope size={20} className="text-danger me-2" />
              <a href="mailto:support@adoptioncenter.com" className="text-dark fw-bold fs-5">
                support@adoptioncenter.com
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center my-3">
              <FaClock size={20} className="text-warning me-2" />
              <p className="text-dark fw-bold fs-5 m-0">Available 24/7</p>
            </div>

            <a href="tel:+18001234567" className="btn btn-primary w-100 mt-3">📞 Call Now</a>
            <a href="mailto:support@adoptioncenter.com" className="btn btn-secondary w-100 mt-2">✉️ Send Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionSupport;
