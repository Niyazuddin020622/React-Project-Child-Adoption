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
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 1" height="400" />
        </div>
        <div className="carousel-item">
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 2" height="400" />
        </div>
        <div className="carousel-item">
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 3" height="400" />
        </div>
        <div className="carousel-item">
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 4" height="400" />
        </div>
        <div className="carousel-item">
          <img src="https://austinshousenv.org/wp-content/uploads/2018/07/Little-Kids-Group.jpg" className="d-block w-100" alt="Image 5" height="400" />
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
