// Feedback.js
import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      // You can save this feedback to your backend or database
      console.log("Feedback submitted:", feedback);
      setFeedbackSubmitted(true);
      setFeedback(""); // Reset feedback field
    } else {
      alert("Please provide some feedback.");
    }
  };

  return (
    <div className="mt-5">
      <h4 className="mb-3">We'd love to hear your feedback!</h4>
      {feedbackSubmitted && <div className="alert alert-success">Thank you for your feedback!</div>}
      <form onSubmit={handleFeedbackSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
