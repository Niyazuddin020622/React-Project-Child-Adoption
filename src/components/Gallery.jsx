import "../CSS/Gallery.css";

const images = [
  { src: "https://tse3.mm.bing.net/th?id=OIP.MsBea8T6T3vDT_yIoNh6JAHaE8&pid=Api&P=0&h=180", className: "small" },
  { src: "https://www.kindpng.com/picc/m/207-2075409_child-standing-clipart-png-transparent-png.png", className: "tall" },
  { src: "https://jooinn.com/images/child-40.jpg", className: "small" },
  { src: "https://purepng.com/public/uploads/large/purepng.com-kidschildrenkidshuman-childchildhappy-kidsklds-1421526965319ir6jr.png", className: "tall" },
  { src: "http://mari.umich.edu/sites/default/files/images/bigstock-multi-ethnic-children-playing-27546755.jpg", className: "small" },
  { src: "https://tse2.mm.bing.net/th?id=OIP.ilmF8fUcUL5ppqrDCmJGVQHaHa&pid=Api&P=0&h=180", className: "tall" },
  { src: "http://mari.umich.edu/sites/default/files/images/bigstock-multi-ethnic-children-playing-27546755.jpg", className: "small" },
  { src: "https://tse1.mm.bing.net/th?id=OIP.fImGQ8-4YZPyUIu2l5eWRAHaE8&pid=Api&P=0&h=180", className: "tall" },
  { src: "https://jooinn.com/images/child-40.jpg", className: "small" },
  { src: "https://tse4.mm.bing.net/th?id=OIP.Yt0672-xZMX6Ai-SadJ6rAHaGE&pid=Api&P=0&h=180", className: "tall" }
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="title">Masonry Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Gallery ${index}`}
            className={`gallery-item ${image.className}`}
            style={{ gridColumn: (index % 5) + 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;