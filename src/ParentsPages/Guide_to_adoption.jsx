import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    title: "Understanding Adoption",
    text: "There are different types of adoption: domestic, international, and foster care. Research the best fit for your family.",
    color: "#ff6b6b"
  },
  {
    title: "Choosing an Adoption Agency",
    text: "Work with a licensed adoption agency or legal expert to ensure the process meets all legal requirements.",
    color: "#ffa502"
  },
  {
    title: "Home Study Process",
    text: "A home study includes background checks, interviews, and an evaluation of the home environment.",
    color: "#2ed573"
  },
  {
    title: "Matching Process",
    text: "After approval, you will be matched with a child based on your preferences and their needs.",
    color: "#1e90ff"
  },
  {
    title: "Legal Adoption Procedures",
    text: "Finalizing adoption requires court approval and legal documentation.",
    color: "#8e44ad"
  },
  {
    title: "Post-Adoption Support",
    text: "Support services, such as counseling and parenting resources, are available to help families adjust.",
    color: "#e67e22"
  }
];

const ParentGuide = () => {
  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-lg" style={{ maxWidth: "1000px" }}>
      <h2 className="text-center text-primary mb-4">Parent Guide to Adoption</h2>
      <p className="text-center mb-5">
        Adoption is a meaningful way to provide a child with a loving and secure home.
        Here is a step-by-step guide for parents considering adoption.
      </p>
      <div className="row g-4">
        {steps.map((step, index) => (
          <div className="col-md-6" key={index}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderTop: `8px solid ${step.color}`,
                borderRadius: "12px",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentGuide;
