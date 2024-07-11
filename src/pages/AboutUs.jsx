import React from 'react';
import SectionTitle from '../components/Home/SectionTitle';

const About = () => {
  return (
    <div className="text-center p-10 font-sans bg-gray-100">
      <SectionTitle title="About Us" classes="mb-5" />
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        We are a dedicated team of professionals committed to providing top-quality services and solutions. Our mission is to drive innovation and deliver exceptional value to our clients. With years of experience in the industry, we strive to exceed expectations and achieve excellence in everything we do.
      </p>
    </div>
  );
};

export default About;
