// src/Roadmap.js
import React from 'react';
import SectionTitle from './SectionTitle';

const Roadmap = () => {
  const events = [
    { date: 'March 2024', description: 'Conducted research to understand the extent of illegal dumping and current detection methods.' },
    { date: 'April 2024', description: 'Designed the overall system architecture, including hardware and software components.' },
    { date: 'May 2024', description: 'Gathered training data from different scenarios and location.' },
    { date: 'June 2024', description: 'Deployed a initial model and conducted tests on real life footage.' },
    { date: 'July 2024', description: 'Released version 1.0 of the system, deployed a high-quality first release, and conducted a market validation test to gather feedback and identify areas for improvement.' },
  ];

  return (
    <div className="text-center p-10 font-sans">
      <SectionTitle title="Project Roadmap" />
      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        The objective of this project is to develop a drone-based system to detect illegal dumping and litter using AI and alert the authorities.
      </p>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className={`mb-10 flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full`}>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="font-bold text-xl mb-2">{event.date}</h3>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="w-1/2 md:w-5 flex justify-center">
              <div className="bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
