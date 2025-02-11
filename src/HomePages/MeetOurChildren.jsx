import React from "react";
import { motion } from "framer-motion";

const MeetOurChildren = () => {
  const children = [
    {
      id: 1,
      name: "Aarav",
      age: "5 years",
      img: "https://img.freepik.com/free-photo/little-cute-toddler-dress_1303-13487.jpg?t=st=1738352910~exp=1738356510~hmac=d50ea1b34305d86dc3490141bc6c19483b2e325d098c06fed578a2ec5b4d427d&w=996",
    },
    {
      id: 2,
      name: "Meera",
      age: "3 years",
      img: "https://img.freepik.com/free-photo/little-cute-toddler-dress_1303-13487.jpg?t=st=1738352910~exp=1738356510~hmac=d50ea1b34305d86dc3490141bc6c19483b2e325d098c06fed578a2ec5b4d427d&w=996",
    },
    {
      id: 3,
      name: "Rohan",
      age: "4 years",
      img: "https://img.freepik.com/free-photo/little-cute-toddler-dress_1303-13487.jpg?t=st=1738352910~exp=1738356510~hmac=d50ea1b34305d86dc3490141bc6c19483b2e325d098c06fed578a2ec5b4d427d&w=996",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        Meet Our Children
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {children.map((child) => (
          <motion.div
            key={child.id}
            className="bg-white shadow-xl rounded-xl p-6 w-72 max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={child.img}
              alt={child.name}
              className="rounded-lg w-full h-56 object-cover mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {child.name}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-500 mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {child.age}
            </motion.p>
            <motion.button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurChildren;
