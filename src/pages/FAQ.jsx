// src/FAQ.js
import React, { useState } from 'react';
import SectionTitle from '../components/Home/SectionTitle';

const faqs = [
  { question: 'What is your main service?', answer: 'Our main service is providing AI-driven solutions for detecting illegal dumping using drones.' },
  { question: 'How can we contact you?', answer: 'You can contact us through the Contact Us page on our website.' },
  { question: 'What areas do you serve?', answer: 'We serve clients globally, with a focus on regions facing significant illegal dumping issues.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="text-center p-10 font-sans bg-gray-100">
      <SectionTitle title="FAQ" classes="mb-5" />
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-white border rounded-lg shadow-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-100 border border-t-0 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
