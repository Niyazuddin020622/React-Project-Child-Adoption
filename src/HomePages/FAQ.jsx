import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  { question: "Who can adopt?", answer: "Any responsible adult who meets legal requirements can adopt." },
  { question: "How long does adoption take?", answer: "The process usually takes 6-12 months." },
  { question: "What is the cost of adoption?", answer: "The cost varies depending on the type of adoption, ranging from legal fees to travel expenses." },
  { question: "Do I need to be married to adopt?", answer: "No, single individuals can also adopt as per the adoption laws." },
  { question: "Is financial stability required?", answer: "Yes, adoptive parents should demonstrate financial stability to provide for the child." },
  { question: "Can I adopt a child of a specific age?", answer: "Yes, you can specify an age preference, but availability depends on circumstances." },
  { question: "What are the legal requirements?", answer: "Legal requirements vary by country/state, including background checks and home studies." },
];

function FAQ() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
