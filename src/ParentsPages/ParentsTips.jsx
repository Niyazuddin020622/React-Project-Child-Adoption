import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    title: "Understanding Adoption",
    text: "There are different types of adoption: domestic, international, and foster care. Research the best fit for your family."
  },
  {
    title: "Choosing an Adoption Agency",
    text: "Work with a licensed adoption agency or legal expert to ensure the process meets all legal requirements."
  },
  {
    title: "Home Study Process",
    text: "A home study includes background checks, interviews, and an evaluation of the home environment."
  },
  {
    title: "Matching Process",
    text: "After approval, you will be matched with a child based on your preferences and their needs."
  },
  {
    title: "Legal Adoption Procedures",
    text: "Finalizing adoption requires court approval and legal documentation."
  },
  {
    title: "Post-Adoption Support",
    text: "Support services, such as counseling and parenting resources, are available to help families adjust."
  }
];

const ParentGuide = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-primary mb-4">Parent Guide to Adoption</h2>
      <div className="row g-4">
        {steps.map((step, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div
              className="p-4 bg-white shadow-sm rounded"
              style={{
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
              }}
            >
              <h5 className="fw-bold mb-2">{step.title}</h5>
              <p className="mb-0">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentGuide;
