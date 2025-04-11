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
    <div className="container mt-5 p-4 rounded shadow-lg" style={{ maxWidth: "900px", background: "white" }}>
      <h2 className="text-center text-primary">Parent Guide to Adoption</h2>
      <p className="text-center">
        Adoption is a meaningful way to provide a child with a loving and secure home. Here is a step-by-step guide for parents considering adoption.
      </p>
      <div className="row g-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-3 rounded text-white"
            style={{
              background: step.color,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              borderRadius: "12px",
              transform: "scale(1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0px 10px 25px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentGuide;
