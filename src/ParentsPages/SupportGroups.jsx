import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const SupportGroups = () => {
  const supportGroups = [
    {
      title: "Local Adoption Support Groups",
      content:
        "Many communities have local meetups where adoptive parents share their experiences, advice, and encouragement.",
    },
    {
      title: "Online Adoption Forums",
      content:
        "Platforms like Adoptive Families Circle and Facebook groups provide a space for virtual support and guidance.",
    },
    {
      title: "Counseling and Therapy Services",
      content:
        "Professional counselors specializing in adoption can help families adjust emotionally and manage any challenges.",
    },
    {
      title: "Parenting Workshops",
      content:
        "Workshops and webinars cover topics like bonding with adopted children, dealing with trauma, and parenting strategies.",
    },
    {
      title: "Legal and Financial Assistance",
      content:
        "Organizations offer guidance on adoption laws, financial aid, and post-adoption benefits.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 border-0">
        <h2 className="text-center text-dark mb-3">Support Groups for Adoptive Parents</h2>
        <p className="text-center text-muted mb-4">
          Adoption comes with unique challenges, but you don’t have to go through it alone. 
          Here are some support groups and resources to help adoptive parents navigate their journey.
        </p>

        <div className="row g-4">
          {supportGroups.map((group, index) => (
            <div key={index} className="col-12 col-md-6">
              <div
                className="card h-100 border-0 shadow-sm p-3"
                style={{
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">{group.title}</h5>
                  <p className="card-text text-secondary">{group.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <p className="text-secondary">Need more support? Join our online community!</p>
          <button className="btn btn-primary px-4">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default SupportGroups;
