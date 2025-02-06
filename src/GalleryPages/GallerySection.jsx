import React from "react";
import "./GallerySection.css"; // Ensure you have the corresponding CSS

function GallerySection() {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Gallery Collection</h2>
      <div className="gallery-container">
        <div className="gallery-cards">
          {/* Gaming Image */}
          <div className="card">
            <img
              src="https://kellysthoughtsonthings.com/wp-content/uploads/2019/04/4-Important-Reasons-Why-Your-Child-Should-Play-Outdoor-Games.jpg"
              alt="Gaming Console"
            />
            <div className="card-content">
              <h3>Gaming Console</h3>
              <p style={{ textAlign: "center" }}>
                Take your gaming to the next level with this high-performance
                console.
              </p>
            </div>
          </div>

          {/* Cultural Festival (Holi) */}
          <div className="card">
            <img
              src="https://2.bp.blogspot.com/-nIqrhiNcvy0/VO9P6UwjjpI/AAAAAAAABYI/6EsVz6M0Rwc/s1600/kids-playing-holi-hd-pictures%2B(1).jpg"
              alt="Cultural Festival"
            />
            <div className="card-content">
              <h3>Holi Festival</h3>
              <p style={{ textAlign: "center" }}>
                Celebrate the festival of colors with joy and happiness during
                Holi.
              </p>
            </div>
          </div>

          {/* National Day (Republic Day or Independence Day) */}
          <div className="card">
            <img
              src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/01/26/INDIA-POLITICS-REPUBLICDAY-095417.jpg?itok=ZUKZkuLS"
              alt="National Day"
            />
            <div className="card-content">
              <h3>Republic Day</h3>
              <p style={{ textAlign: "center" }}>
                Honor the country's history and celebrate the spirit of unity on
                Republic Day.
              </p>
            </div>
          </div>

          {/* Children Studying */}
          <div className="card">
            <img
              src="https://media.istockphoto.com/photos/group-of-school-children-studying-in-the-classroom-picture-id672317074?k=6&m=672317074&s=170667a&w=0&h=KSd2P3fI1qHYZOkEEKx49DlrHM19JVGNBV-iC3A-vkc="
              alt="Children Studying"
            />
            <div className="card-content">
              <h3>Children Studying</h3>
              <p style={{ textAlign: "center" }}>
                Empowering young minds through education and learning in the
                classroom.
              </p>
            </div>
          </div>

          {/* Visit (Kids Traveling or Exploring) */}
          <div className="card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.loVHyWyJrwoSNM5ezr1VhAHaE7&pid=Api&P=0&h=180"
              alt="Visit"
            />
            <div className="card-content">
              <h3>Kids Exploring</h3>
              <p style={{ textAlign: "center" }}>
                Taking children on exciting adventures and trips to explore the
                world.
              </p>
            </div>
          </div>

          {/* Placeholder Image for the last one */}
          <div className="card">
            <img
              src="https://www.pepplay.in/wp-content/uploads/2022/02/bharathanatyam-begginers-dr-pooja-vijayan-primary-image-tphbCZpEhXSQMpbI.jpg-1024x683.jpg"
              alt="Bharatanatyam Dance"
            />
            <div className="card-content">
              <h3>Bharatanatyam Dance</h3>
              <p style={{textAlign:"center"}}>
              Bharatanatyam, from Tamil Nadu, is a classical dance known for its expressive gestures, footwork, and rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
