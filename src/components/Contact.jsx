import React from "react";
import "../CSS/Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header text-center py-5 position-relative">
        <div className="running-text">
          <span>
            "Adopting one child won’t change the world, but for that child, the
            world will change forever. ❤️" &nbsp; | &nbsp; "Every child deserves
            a loving home. Adopt and make a difference. 🏡"
          </span>
        </div>

        <div
          className="header-background"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1615723411974-ed6cf1a6180a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="header-content position-absolute top-50 start-50 translate-middle text-white">
          <h1 className="display-4 fw-bold">Get in Touch</h1>
          <p className="text-light fs-5">We'd love to hear from you!</p>
        </div>
      </header>

      {/* Main Contact Section */}
      <div className="container py-5">
        <div className="row">
          {/* Contact Details */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-lg p-4 border-0">
              <h3 className="mb-4">Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-phone-alt me-2 text-primary"></i>
                  <strong>Phone:</strong> +91 8825135461 / +91 6206173716
                </li>
                <li className="mb-3">
                  <i className="fas fa-envelope me-2 text-primary"></i>
                  <strong>Email:</strong> childadopt02@adoptionagency.com
                </li>
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <strong>Address:</strong> Rajkot, Gujarat, India 360020
                </li>
                <li className="mb-3">
                  <i className="fas fa-clock me-2 text-primary"></i>
                  <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-lg p-4 border-0">
              <h3 className="mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container py-5 position-relative">

        <iframe ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68696443523!2d70.73872349317425!3d22.273624940214702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1737823552628!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Agency Location"
        ></iframe>
        <div className="map-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <h3 className="text-white text-shadow">Visit Us at Our Location!</h3>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section text-center py-4 bg-light">
        <h3 className="mb-3">Follow Us</h3>
        <div>
          <a
            href="https://facebook.com/adoptionagency"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://instagram.com/adoptionagency"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger mx-2"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com/adoptionagency"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info mx-2"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
