import React from "react";

const tips = [
  { text: "Educate yourself about the adoption process and legal requirements.", color: "#ff6b6b" },
  { text: "Prepare your home and family emotionally for the adoption journey.", color: "#ffa502" },
  { text: "Consider the child's background, culture, and emotional needs.", color: "#2ed573" },
  { text: "Be patient and open-minded as the transition can take time.", color: "#1e90ff" },
  { text: "Seek support from adoption counselors or support groups.", color: "#8e44ad" },
  { text: "Communicate openly and honestly with your adopted child.", color: "#e67e22" },
  { text: "Encourage a sense of identity by honoring the child's heritage.", color: "#00cec9" },
  { text: "Provide a stable and loving environment for the child's growth.", color: "#fd79a8" }
];

const ParentsTips = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Tips for Adoptive Parents</h2>
      <div className="row g-4">
        {tips.map((tip, index) => (
          <div key={index} className="col-md-6">
            <div
              className="p-3 rounded text-white shadow-sm"
              style={{
                backgroundColor: tip.color,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
              }}
            >
              <p className="mb-0">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentsTips;
