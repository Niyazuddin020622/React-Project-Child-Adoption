import React from "react";
import "../CSS/AdoptionResources.css"; // Linking the updated CSS for styling

const AdoptionResources = () => {
  return (
    <div className="adoption-resources-page container py-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Adoption Resources</h2>

      <div className="resources-section">
        {/* Guide to Adoption */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">1. Guide to Adoption</h4>
          <p className="resource-description">
            A comprehensive guide to adoption, covering everything from the legal process to emotional considerations. Learn what steps to take when adopting a child and the requirements for a successful adoption journey.
          </p>
          <a href="#guide" className="btn btn-primary">Read More</a>
        </div>

        {/* Parenting Tips */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">2. Parenting Tips</h4>
          <p className="resource-description">
            Practical parenting tips for both new and experienced parents. This section covers essential guidance on how to nurture and bond with your adopted child, fostering a loving home.
          </p>
          <a href="#parenting-tips" className="btn btn-primary">Explore Tips</a>
        </div>

        {/* Support Groups */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">3. Support Groups</h4>
          <p className="resource-description">
            Connect with a community of parents through adoption support groups. Share experiences, get advice, and offer support to others going through similar experiences.
          </p>
          <a href="#support-groups" className="btn btn-primary">Find Support</a>
        </div>

        {/* Legal Resources */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">4. Legal Resources</h4>
          <p className="resource-description">
            Legal resources to help you navigate adoption laws, rights, and responsibilities. Find out about adoption regulations in different states and countries, and get legal assistance if needed.
          </p>
          <a href="#legal-resources" className="btn btn-primary">Learn More</a>
        </div>

        {/* Adoption Stories */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">5. Adoption Stories</h4>
          <p className="resource-description">
            Hear from families who have gone through the adoption process. Read inspiring stories that can help you understand the emotional journey of adopting a child and offer you encouragement.
          </p>
          <a href="#adoption-stories" className="btn btn-primary">Read Stories</a>
        </div>

        {/* Financial Assistance */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">6. Financial Assistance</h4>
          <p className="resource-description">
            Learn about grants, loans, and other financial resources available to help offset the cost of adoption. Make your adoption journey more affordable.
          </p>
          <a href="#financial-assistance" className="btn btn-primary">Discover Options</a>
        </div>

        {/* Health and Wellness */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">7. Health and Wellness</h4>
          <p className="resource-description">
            Essential tips and resources to ensure the physical and emotional well-being of your adopted child, from medical care to counseling support.
          </p>
          <a href="#health-wellness" className="btn btn-primary">Learn More</a>
        </div>

        {/* Educational Resources */}
        <div className="resource-card shadow-lg p-4 mb-4 rounded">
          <h4 className="resource-title">8. Educational Resources</h4>
          <p className="resource-description">
            Find educational materials, tools, and programs to support the academic success of your adopted child and enhance their learning experience.
          </p>
          <a href="#educational-resources" className="btn btn-primary">Explore Resources</a>
        </div>
      </div>
    </div>
  );
};

export default AdoptionResources;
