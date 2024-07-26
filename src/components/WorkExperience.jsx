import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Company Name</h3>
          <p className="mt-2">Web Developer (2+ years)</p>
          <p className="mt-4">Description of your role and achievements at the company.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
