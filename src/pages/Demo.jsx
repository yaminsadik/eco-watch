import React from 'react';
import SectionTitle from '../components/Home/SectionTitle';

const Demo = () => {
  return (
    <div className="text-center p-10 font-sans">
      <SectionTitle title="Demo" classes="mb-5" />
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        Welcome to the demo of our AI-driven illegal dumping detection system. Explore the features and see how our solution can help you.
      </p>
      {/* Add your demo content here */}
    </div>
  );
};

export default Demo;
