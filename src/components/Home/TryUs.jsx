// src/TryUs.js
import React from 'react';
import SectionTitle from './SectionTitle';

const TryUs = () => {
  return (
    <div className="text-center p-10 font-sans bg-gray-100">
      <SectionTitle title="Try Us" classes="mb-5" />
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        Experience the power of our AI-driven illegal dumping detection system. Try our demo and see how we can help you combat illegal dumping effectively.
      </p>
      <a 
        href="/demo" 
        className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition duration-300"
      >
        Try the Demo
      </a>
    </div>
  );
};

export default TryUs;
