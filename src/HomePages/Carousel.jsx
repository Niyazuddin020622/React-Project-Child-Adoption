import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel() {
  const images = [
    "https://img.freepik.com/free-photo/relaxed-preteen-girl-embracing-with-mother-winsome-young-mom-kissing-daughter-pink-background_197531-13683.jpg?t=st=1738349792~exp=1738353392~hmac=bb94c63a0a7c8040d8107127d1bd6b4e1141ffb1f919e464223b2203ea88866b&w=996",
    "https://img.freepik.com/free-photo/young-mom-holding-her-baby-air-blank-space_53876-97233.jpg?t=st=1738349919~exp=1738353519~hmac=d8f9723fd1b74e1a5cfaf4928139111d3460c889587386b5752b2d747e6e742f&w=1380",
    "https://img.freepik.com/free-photo/indoor-shot-smiling-handsome-freelancer-male-wearing-burgundy-t-shirt-posing-white-kitchen-sitting-front-laptop-with-baby-hands-typing-notebook_176532-15491.jpg?t=st=1738349984~exp=1738353584~hmac=3debf09e82ccc13e649d96a3ce298550b7c74a2bf2c75dbcb1a3591895e16774&w=996",
    "https://img.freepik.com/free-photo/photorealistic-portrait-non-traditional-family-structure_23-2151295284.jpg?t=st=1738350021~exp=1738353621~hmac=dc9f46dd4013210a43896ad82d2ec87f72ed740a7013114a1e59a5e5c38081d2&w=996",
    "https://img.freepik.com/free-photo/young-family-have-fun-relaxing-outdoors-countryside_1153-7548.jpg?t=st=1738350120~exp=1738353720~hmac=a6c5e01bc03a0c74d57984fd3f46b2581a7bcfd8cdb42a7702cf0516992c90c5&w=996",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="relative h-72 md:h-[28rem] lg:h-[36rem] rounded-lg">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            className="absolute block w-full h-full object-cover object-center"
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center justify-center p-2 bg-white/50 rounded-full hover:bg-white/70 transition"
        onClick={prevSlide}
      >
        <svg className="h-6 w-6 text-gray-800" viewBox="0 0 6 10" fill="none">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center p-2 bg-white/50 rounded-full hover:bg-white/70 transition"
        onClick={nextSlide}
      >
        <svg className="h-6 w-6 text-gray-800" viewBox="0 0 6 10" fill="none">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
