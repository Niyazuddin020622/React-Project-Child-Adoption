import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdoptionStoryPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore((prev) => !prev);
    if (!showMore) {
      setTimeout(() => {
        document.getElementById("learnMoreSection").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div>
      {/* Full-Width Success Stories Carousel */}
      <div className="container-fluid p-0">
      <div id="adoptionCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg"
          className="d-block w-100"
          alt="Happy Adoptive Family"
          style={{ objectFit: "cover", height: "500px" }} // Height kam kiya gaya hai
        />
        <div className="carousel-caption d-none d-md-block">
          <h3>The Sharma Family</h3>
          <p style={{textAlign:"center"}}>“Adopting Aarav was the best decision of our lives!”</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/1784566/pexels-photo-1784566.jpeg"
          className="d-block w-100"
          alt="Family with Adopted Child"
          style={{ objectFit: "cover", height: "500px" }} // Height kam kiya gaya hai
        />
        <div className="carousel-caption d-none d-md-block">
          <h3>The Mehta Family</h3>
          <p style={{textAlign:"center"}}>“Our hearts are fuller since adopting little Riya.”</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#adoptionCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#adoptionCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
      </div>

      {/* Testimonials Section */}
      <div className="container text-center my-5">
        <h2 className="mb-4">What Adoptive Parents Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <p style={{textAlign:"center"}}>“We thought we were giving a child a home, but we got a home full of love in return!”</p>
              <h5>- Raj & Priya</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <p>“Adopting was the best decision. Our daughter completes our family.”</p>
              <h5>- Aman & Neha</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <p>“Every day is a blessing since we adopted Rohan.”</p>
              <h5>- Suresh & Kavita</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-5 bg-light">
        <h2>Are you ready to change a life?</h2>
        <p style={{textAlign:"center"}}> Start your adoption journey today.</p>
        <button className="btn btn-primary btn-lg" onClick={handleLearnMoreClick}>
          {showMore ? "Learn Less" : "Learn More"}
        </button>
      </div>

      {/* Hidden Section: Appears on Button Click */}
      {showMore && (
        <div id="learnMoreSection" className="container my-5 p-4 bg-white shadow rounded">
          <h2 className="text-center">Why Adoption Matters</h2>
          <p className="text-center">
            Adoption transforms lives by giving children a loving home and parents a fulfilling journey.
          </p>

          <div className="row">
            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg"
                className="img-fluid rounded"
                alt="Happy Family Together"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p>
                Adopting a child is not just about giving a home, it's about building a lifetime of love, support, and cherished moments.
                Many children are waiting for a family that will call them their own. If you're considering adoption, you're about to embark
                on the most rewarding journey of your life.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionStoryPage;
