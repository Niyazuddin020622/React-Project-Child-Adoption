import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <section
      className="position-relative text-center text-white d-flex align-items-center justify-content-center"
      style={{
        height: "500px",
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/020/484/779/large_2x/banner-with-happy-multiracial-families-with-kids-flat-illustration-international-family-day-and-people-diversity-concept-multi-ethnic-family-of-parents-and-children-free-vector.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      {/* Main Content */}
      <div className="position-relative container text-center">
        <h1 className="display-4 fw-bold mb-3">Give a Child a Loving Home</h1>
        <p className="lead mb-4" style={{textAlign:"center"}}>
          Start your adoption journey today and make a difference in a child's
          life.
        </p>
        <a href="#adoption-steps" className="btn btn-warning btn-lg px-4">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Banner;
