import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../CSS/About.css";
import about1 from  "../assets/about1.jpg";
import about2 from  "../assets/about2.jpg";
import about4 from  "../assets/about4.jpg";



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
              ready to embrace the joy of parenthood. We strive to offer
              children the hope of a brighter future by connecting them with
              families who can provide stability, love, and care.
            </p>
            <p className="text-muted fs-5">
              We understand that adoption is a life-changing decision, and we
              are committed to supporting both prospective parents and children
              throughout the entire process. With a focus on compassion,
              integrity, and transparency, we aim to create a community where
              families and children find the love and support they deserve.
            </p>
            <p className="text-muted fs-5">
              Our dedicated team works closely with families to provide
              guidance, resources, and personalized care to ensure the adoption
              process is as seamless and supportive as possible. Whether it's
              answering questions, providing counseling, or offering
              post-adoption support, we are here every step of the way to make
              sure both the children and families feel safe and secure in their
              new journey together.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={about1}
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
                alt="John Doe"
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
                src={about2}
                alt="Jane Smith"
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
                src={about4}
                alt="Emily Johnson"
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

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="0"
                className="active"
                style={{ backgroundColor: "#000" }}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="1"
                style={{ backgroundColor: "#000" }}
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide-to="2"
                style={{ backgroundColor: "#000" }}
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">Support Our Mission</h2>
        <p className="fs-5 mb-4">
          Your donation and volunteer efforts help create forever families for
          children in need.
        </p>
        <a href="/donate" className="btn btn-success btn-lg px-4 py-2">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default About;
