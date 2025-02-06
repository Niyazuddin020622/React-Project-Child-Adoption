import React from "react";
import "../CSS/availableChildren.css";
// import HeroSectionChildren from "./HeroSectionChildren";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"; // Importing Bootstrap Carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

const AvailableChildren = () => {
  const navigate = useNavigate(); // Navigation for card click

  const children = [
    {
      id: 1,
      name: "Nitya Ansari",
      age: 6,
      photo:
        "https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg",
      description: "Nitya loves drawing, playing outdoors, and has a fascination with animals.",
      background: "Nitya is a very cheerful child who dreams of becoming an artist.",
    },
    {
      id: 2,
      name: "Vidya",
      age: 8,
      photo:
        "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
      description: "Vidya enjoys reading books, solving puzzles, and playing chess.",
      background: "Vidya excels in academics and loves spending time in nature.",
    },
    {
      id: 3,
      name: "Aaryan",
      age: 5,
      photo: "https://cdn.pixabay.com/photo/2016/05/31/11/26/baby-1426651_1280.jpg",
      description: "Aaryan is energetic and loves dancing and playing sports.",
      background: "Aaryan is very social and always ready to try new activities.",
    },
    {
      id: 4,
      name: "Rani Soni",
      age: 5,
      photo: "https://cdn.pixabay.com/photo/2015/06/12/21/58/child-807547_640.jpg",
      description: "Aaryan is energetic and loves dancing and playing sports.",
      background: "Aaryan is very social and always ready to try new activities.",
    },
    {
      id: 5,
      name: "Hamza Babu",
      age: 5,
      photo: "https://cdn.pixabay.com/photo/2016/05/31/11/26/baby-1426651_1280.jpg",
      description: "Aaryan is energetic and loves dancing and playing sports.",
      background: "Aaryan is very social and always ready to try new activities.",
    },
   
  ];

  return (
   
    <div className="container available-children-container">
      
      {/* Dynamic Carousel of Children */}
      <Carousel fade interval={3000}>
        {children.map((child) => (
          <Carousel.Item key={child.id}>
            <div className="carousel-image-container">
              <img src={child.photo} className="carousel-image" alt={child.name} />
              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3>{child.name}</h3>
              <p>{child.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h1 className="text-center my-4" style={{ color: "#1e3c72", fontWeight: "bold" }}>
        Available Children for Adoption
      </h1>
      {/* <HeroSectionChildren/> */}
      <p className="text-center description">
        These children are looking for a loving family. Click on a profile to learn more about them.
      </p>

      {/* Available Children Cards */}
      <div className="row children-grid mt-5">
        {children.map((child) => (
          <div className="col-md-4 mb-4" key={child.id}>
            <div
              className="card shadow-lg h-100 child-card"
              onClick={() => navigate(`/child-details/${child.id}`)}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={child.photo}
                alt={`${child.name}'s photo`}
                className="card-img-top child-photo"
              />
              <div className="card-body">
                <h3 className="card-title">{child.name}</h3>
                <p className="card-text">Age: {child.age}</p>
                <p className="card-text">{child.description}</p>
                <Link to={`/child-details/${child.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
              <div className="card-footer text-muted">
                <p>{child.background}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
<div className="faq-section mt-5">
  <h2 className="text-center">Frequently Asked Questions</h2>
  <div className="faq">
    <div className="faq-item">
      <h4>Q: What is the adoption process like?</h4>
      <p>
        A: The adoption process involves several steps. First, you will need to complete an adoption application. After submission, you will go through background checks, interviews, and home visits. Following that, you will be matched with a child based on your preferences and the child’s needs. It can take some time, but the goal is to ensure that both the child and the adoptive parents are a good match. The final step is the legal process, which includes court approval to finalize the adoption.
      </p>
    </div>

    <div className="faq-item">
      <h4>Q: Is there any financial assistance available?</h4>
      <p>
        A: Yes, there are various financial assistance programs available to support adoptive parents. These may include adoption subsidies, grants, and tax credits. Some states and organizations also offer financial aid to help cover the costs associated with the adoption process, such as home study fees, legal fees, and medical expenses for children with special needs. It's important to research the resources available in your area and understand the specific eligibility requirements.
      </p>
    </div>

    <div className="faq-item">
      <h4>Q: Can single parents adopt?</h4>
      <p>
        A: Absolutely! Many single parents successfully adopt children. Adoption agencies and organizations do not discriminate based on marital status, and they welcome single individuals who are prepared and committed to providing a loving and stable home. Single parents often bring unique strengths to the adoption process, such as a strong sense of commitment, flexibility, and the ability to provide one-on-one attention to their child. If you're interested in adopting as a single parent, the adoption agency will work with you to assess your readiness and provide support throughout the process.
      </p>
    </div>
  </div>
</div>
</div>
  );
};

export default AvailableChildren;
