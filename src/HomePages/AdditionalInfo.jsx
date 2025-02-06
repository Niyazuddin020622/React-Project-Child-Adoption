import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  { title: "Application", description: "Submit your adoption application form to get started. Provide necessary information and preferences." },
  { title: "Interview", description: "Meet with our adoption counselors for a thorough interview process to ensure the right match." },
  { title: "Matchmaking", description: "Our team works to match you with a child that fits your preferences and requirements." },
  // { title: "Home Visit", description: "Our team will visit your home to ensure it's a safe and nurturing environment for the child." },
  // { title: "Finalization", description: "Once everything is in place, we finalize the adoption, and the child becomes a permanent part of your family." },
  // { title: "Post-Adoption Support", description: "We provide ongoing support after adoption to ensure a smooth transition and offer guidance as needed." }
];

const AdditionalInfo = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="py-5 bg-light">
      <div className="text-center container">
        <h2 className="display-4 fw-bold mb-5 text-primary">Adoption Process</h2>
        <div className="row g-4 justify-content-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden" 
                style={{ background: "linear-gradient(135deg, #f9f9f9, #e3e3e3)", padding: "20px" }}>
                <div className="card-body text-center">
                  <h3 className="h4 fw-bold text-dark mb-3">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-muted fs-5">
                    {expandedIndex === index ? step.description : `${step.description.substring(0, 60)}...`}
                  </p>
                  <motion.button
                    className="btn btn-outline-primary mt-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
