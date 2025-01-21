import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../CSS/About.css";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/young-parents-with-little-daughter-resting-autumn-forest_23-2147888282.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="display-3 fw-bold">About Us</h1>
        <p className="lead fs-4">Creating Families, One Child at a Time</p>
        <blockquote className="blockquote">
          "The best way to find yourself is to lose yourself in the service of
          others." – Mahatma Gandhi
        </blockquote>
        <button className="btn btn-primary mt-3">
          Learn More About Our Mission
        </button>
      </div>

      {/* Mission Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="text-muted fs-5">
              At <strong>Hope & Home Adoption Services</strong>, we believe
              every child deserves a loving and caring family. Our mission is to
              bridge the gap between children in need of homes and families
              ready to embrace the joy of parenthood.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-photo/family-with-cute-kids-autumn-park_1157-26549.jpg?t=st=1737368825~exp=1737372425~hmac=d8f34df0cd21c6547c77d06b6ba2768d6938e05bac4ed0fad9e9da0c088fac3a&w=1060"
              alt="Mission"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              
              <i className="bi bi-heart-fill text-danger display-1"></i>
              <h5 className="mt-3 fw-bold">Compassionate Support</h5>
              <p className="text-muted fs-6">
                We provide emotional and practical guidance throughout your
                adoption journey.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-award-fill text-success display-1"></i>
              <h5 className="mt-3 fw-bold">Trusted Expertise</h5>
              <p className="text-muted fs-6">
                Our team has decades of experience in child welfare and adoption
                services.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-eye-fill text-primary display-1"></i>
              <h5 className="mt-3 fw-bold">Transparent Process</h5>
              <p className="text-muted fs-6">
                We ensure a smooth, transparent process, from application to
                home placement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="team-card position-relative">
              <img
                src="https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall-showing-okay-gesture-sitting-floor_171337-102639.jpg?w=1060"
                alt="Team Member"
                className="img-fluid shadow-lg team-img"
              />
              <div className="team-details text-center p-3">
                <h5 className="fw-bold">John Doe</h5>
                <p className="text-muted">Founder & CEO</p>
                <p className="small">
                  Age: 42 <br />
                  Expertise: Child Adoption Specialist <br />
                  Motto: "Building families, one child at a time."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card position-relative">
              <img
                src="https://img.freepik.com/free-photo/expressive-girl-is-posing-studio_176474-59350.jpg?t=st=1737373399~exp=1737376999~hmac=c82e930d040aa415845d0a3a714ee49c5373e6fd9e6eaf6f774acd31afbc4cf2&w=1060"
                alt="Team Member"
                className="img-fluid shadow-lg team-img"
              />
              <div className="team-details text-center p-3">
                <h5 className="fw-bold">Jane Smith</h5>
                <p className="text-muted">Adoption Specialist</p>
                <p className="small">
                  Age: 35 <br />
                  Expertise: Family Counseling <br />
                  Motto: "Every child deserves a loving home."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card position-relative">
              <img
                src="https://img.freepik.com/free-photo/expressive-girl-is-posing-studio_176474-59350.jpg?t=st=1737373399~exp=1737376999~hmac=c82e930d040aa415845d0a3a714ee49c5373e6fd9e6eaf6f774acd31afbc4cf2&w=1060"
                alt="Team Member"
                className="img-fluid shadow-lg team-img"
              />
              <div className="team-details text-center p-3">
                <h5 className="fw-bold">Emily Johnson</h5>
                <p className="text-muted">Social Worker</p>
                <p className="small">
                  Age: 29 <br />
                  Expertise: Child Welfare <br />
                  Motto: "Creating bonds that last a lifetime."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <h2 className="text-center fw-bold mb-5 text-primary">
          What Our Families Say
        </h2>
        <div className="container">
          <div
            id="testimonialsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner text-center shadow-lg p-4 rounded bg-light">
              {/* Testimonial 1 */}
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p className="mb-4 fs-4 fst-italic">
                    "Adopting through this organization was the best decision we
                    ever made."
                  </p>
                  <footer className="blockquote-footer text-muted">
                    <cite>The Johnson Family</cite>
                  </footer>
                </blockquote>
              </div>
              {/* Testimonial 2 */}
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p className="mb-4 fs-4 fst-italic">
                    "We felt supported and guided every step of the way."
                  </p>
                  <footer className="blockquote-footer text-muted">
                    <cite>Emily and Mark</cite>
                  </footer>
                </blockquote>
              </div>
              {/* Testimonial 3 */}
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p className="mb-4 fs-4 fst-italic">
                    "This experience has changed our lives forever in the most
                    wonderful way."
                  </p>
                  <footer className="blockquote-footer text-muted">
                    <cite>The Smith Family</cite>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Testimonial 1"
                style={{ filter: "invert(1)" }}
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="1"
                aria-label="Testimonial 2"
                style={{ filter: "invert(1)" }}
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="2"
                aria-label="Testimonial 3"
                style={{ filter: "invert(1)" }}
              ></button>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true "style={{ filter: "invert(1)" }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="next"
            >
             <span
  className="carousel-control-next-icon"
  aria-hidden="true"
  style={{ filter: "invert(1)" }}
></span>

              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Achievements</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <i className="bi bi-people-fill text-primary display-1"></i>
            <h5 className="mt-3 fw-bold">500+ Children Adopted</h5>
            <p className="text-muted fs-6">
              We’ve successfully placed over 500 children into loving homes.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-house-fill text-success display-1"></i>
            <h5 className="mt-3 fw-bold">400+ Families Supported</h5>
            <p className="text-muted fs-6">
              Hundreds of families have found joy and fulfillment through our
              services.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-trophy-fill text-warning display-1"></i>
            <h5 className="mt-3 fw-bold">20+ Years of Excellence</h5>
            <p className="text-muted fs-6">
              Over two decades of experience in providing quality adoption
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Donate/Volunteer */}
      <div
        className="text-center py-5"
        style={{
          background: "linear-gradient(to right, #ffecd2, #06bbcc )",
          color: "#333",
        }}
      >
        <h2 className="fw-bold">Support Our Mission</h2>
        <p className="lead fs-5 mb-4">
          Help us continue creating families by donating or volunteering with
          us.
        </p>
        <div>
          <button
            className="btn btn-primary me-3 px-4 py-2 shadow"
            style={{
              backgroundColor: "#007bff",
              border: "none",
              fontSize: "1rem",
            }}
          >
            <i className="bi bi-heart-fill me-2"></i>Donate Now
          </button>
          <button
            className="btn btn-outline-primary px-4 py-2 shadow"
            style={{
              borderColor: "#007bff",
              fontSize: "1rem",
            }}
          >
            <i className="bi bi-people-fill me-2"></i>Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
