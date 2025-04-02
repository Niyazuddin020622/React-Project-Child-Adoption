import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const SupportGroups = () => {
  const supportGroups = [
    {
      title: "Local Adoption Support Groups",
      content:
        "Many communities have local meetups where adoptive parents share their experiences, advice, and encouragement.",
      bgColor: "bg-danger",
    },
    {
      title: "Online Adoption Forums",
      content:
        "Platforms like Adoptive Families Circle and Facebook groups provide a space for virtual support and guidance.",
      bgColor: "bg-warning",
    },
    {
      title: "Counseling and Therapy Services",
      content:
        "Professional counselors specializing in adoption can help families adjust emotionally and manage any challenges.",
      bgColor: "bg-success",
    },
    {
      title: "Parenting Workshops",
      content:
        "Workshops and webinars cover topics like bonding with adopted children, dealing with trauma, and parenting strategies.",
      bgColor: "bg-primary",
    },
    {
      title: "Legal and Financial Assistance",
      content:
        "Organizations offer guidance on adoption laws, financial aid, and post-adoption benefits.",
      bgColor: "bg-purple",
    },
  ];

  return (
    <div className="container py-5">
      <div className="card shadow-lg text-center p-4">
        <h2 className="text-dark">Support Groups for Adoptive Parents</h2>
        <p className="text-muted">
          Adoption comes with unique challenges, but you don’t have to go through it alone. 
          Here are some support groups and resources to help adoptive parents navigate their journey.
        </p>

        {/* Support Groups List */}
        <div className="row mt-4">
          {supportGroups.map((group, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className={`card text-white ${group.bgColor} shadow-sm`}>
                <div className="card-body">
                  <h5 className="card-title">{group.title}</h5>
                  <p className="card-text">{group.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-4">
          <p className="text-secondary">Need more support? Join our online community!</p>
          <button className="btn btn-primary">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default SupportGroups;
