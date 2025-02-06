import React from "react";
import { motion } from "framer-motion";

const WhyAdopt = () => (
  <section className="py-16 bg-gray-100 text-center">
    <motion.h2
      className="text-3xl md:text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Why Adopt?
    </motion.h2>
    <motion.p
      className="text-lg max-w-3xl mx-auto text-gray-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Adopting a child brings joy, love, and purpose to both the child and the family. 
      Give a child a forever home and create a beautiful future together.
    </motion.p>
  </section>
);

export default WhyAdopt;
