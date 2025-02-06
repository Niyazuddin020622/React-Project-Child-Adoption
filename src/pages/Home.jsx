import React, { useState } from "react";
// import HeroSection from "./HeroSection";
import "../CSS/Home.css"; // Add a CSS file for additional styling

const Home = () => {
  // Example data for children (replace with actual API or database data)
  const [children] = useState([
    {
      id: 1,
      name: "Aarav",
      age: 3,
      location: "Delhi",
      health: "Good",
      gender: "Boy",
      image: "https://img.freepik.com/premium-photo/indian-little-child-girl-with-stethoscope-stuffed-baby-puppy-toy-sitting-against-white-background_466689-46115.jpg?w=740",
    },
    {
      id: 2,
      name: "Ananya",
      age: 5,
      location: "Mumbai",
      health: "Excellent",
      gender: "Girl",
      image: "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg?t=st=1737409153~exp=1737412753~hmac=27ab6ba2180b8edb4d82727dc74114c51be91f4bae610334916ac2d042f5a1de&w=1060",
    },
    {
      id: 3,
      name: "Rohan",
      age: 6,
      location: "Bangalore",
      health: "Average",
      gender: "Boy",
      image: "https://img.freepik.com/free-photo/portrait-happy-little-girl-with-arms-raised-air-isolated-white-background_639032-975.jpg?t=st=1737409081~exp=1737412681~hmac=8abe739591a5993f4cec32680a558b0ba22d8d4da1c8a204eed002728a129d52&w=1060",
    },
  ]);

  return (
    <div className="home-background">
      {/* <HeroSection /> */}
      <div className="children-section container py-5">
        <h2 className="text-center fw-bold mb-4">Available Children for Adoption</h2>
        <div className="row g-4">
          {children.map((child) => (
            <div key={child.id} className="col-md-4">
              <div className="card shadow-lg">
                <img
                  src={child.image}
                  className="card-img-top"
                  alt={`${child.name}'s profile`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{child.name}</h5>
                  <p className="card-text">Age: {child.age} years</p>
                  <p className="card-text">Location: {child.location}</p>
                  <p className="card-text">Health: {child.health}</p>
                  <button className="btn btn-primary">Adopt {child.name}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
