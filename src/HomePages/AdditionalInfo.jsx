import React from "react";
import { motion } from "framer-motion";

const AdditionalInfo = () => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Testimonial Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 w-72"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic">"Adopting has been a life-changing experience for our family. It's truly fulfilling to provide a loving home to a child in need."</p>
            <p className="text-right mt-4 font-semibold">- John & Sarah</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 w-72"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 italic">"We never thought we would find the perfect child to adopt, but LittleHaven made it easy and meaningful."</p>
            <p className="text-right mt-4 font-semibold">- Emily & David</p>
          </motion.div>
        </div>
      </div>

      {/* Adoption Process Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Adoption Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 1: Application</h3>
            <p className="text-gray-600">
              Submit your adoption application form to get started. Provide necessary information and preferences.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 2: Interview</h3>
            <p className="text-gray-600">
              Meet with our adoption counselors for a thorough interview process to ensure the right match.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 3: Matchmaking</h3>
            <p className="text-gray-600">
              Our team works to match you with a child that fits your preferences and requirements.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 4: Home Visit</h3>
            <p className="text-gray-600">
              Our team will visit your home to ensure it's a safe and nurturing environment for the child.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 5: Finalization</h3>
            <p className="text-gray-600">
              Once everything is in place, we finalize the adoption, and the child becomes a permanent part of your family.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Step 6: Post-Adoption Support</h3>
            <p className="text-gray-600">
              We provide ongoing support after adoption to ensure a smooth transition and offer guidance as needed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
