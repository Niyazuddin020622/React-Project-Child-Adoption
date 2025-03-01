import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCarousel = () => {
  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      {/* Indicators (dots) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="4"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 1" height="550" />
          <div className="carousel-caption">
            <h2>Welcome to Our Community</h2>
            <p>Bringing Smiles to Every Child</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://t3.ftcdn.net/jpg/02/43/53/90/360_F_243539073_ZkIl2iDs017GU1ocTAqq4qADsQrqhWv7.jpg" className="d-block w-100" alt="Image 2" height="550" />
          <div className="carousel-caption">
            <h2>Support & Care</h2>
            <p>Helping Kids Grow with Love</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1628676348963-f88c671333f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 3" height="550" />
          <div className="carousel-caption">
            <h2>Education for All</h2>
            <p>Providing Knowledge & Wisdom</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1708007650528-f31f920651a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 4" height="550" />
          <div className="carousel-caption">
            <h2>Community Events</h2>
            <p>Join Us in Making a Difference</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1629359652978-a5d383151c4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 5" height="550" />
          <div className="carousel-caption">
            <h2>Together We Can</h2>
            <p>Empowering the Next Generation</p>
          </div>
        </div>
      </div>

      {/* Controls (Prev / Next Buttons) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default ImageCarousel;
