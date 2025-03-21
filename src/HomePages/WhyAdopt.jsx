import React from "react";

function WhyAdopt() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-4">Why Adoption Matters</h2>
      <p className="text-center mb-4">
        Adoption provides a child with a loving family, a stable home, and a brighter future.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">❤️ Give a Loving Home</h5>
              <p className="card-text">
                Many children are waiting for a family to love and support them.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">📚 Secure Their Future</h5>
              <p className="card-text">
                Adopted children gain access to education, healthcare, and stability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">🌎 Make a Difference</h5>
              <p className="card-text">
                Your love and care can transform a child's life forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAdopt;
