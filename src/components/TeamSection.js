import React, { useState } from 'react';

const faqs = [
  {
    question: 'Which cement is better 43 grade or 53 grade?',
    answer: '53 grade cement is often preferred for its higher strength and faster setting time, while 43 grade is suitable for general construction purposes.',
  },
  {
    question: 'How can you check the quality of cement?',
    answer: 'Cement quality can be checked by ensuring it is smooth when rubbed between fingers, sinks in water, and has no lumps.',
  },
  {
    question: 'How do you store cement at home?',
    answer: 'Cement should be stored in a dry place, off the ground, and away from moisture to prevent hardening.',
  },
  {
    question: 'What is the lifespan of cement?',
    answer: 'Cement typically has a shelf life of 3 months if stored properly under dry conditions.',
  },
  {
    question: 'What are the 5 types of cement?',
    answer: 'The five common types are Ordinary Portland Cement, Portland Pozzolana Cement, Rapid Hardening Cement, Low Heat Cement, and Sulphate Resisting Cement.',
  },
  {
    question: 'How long does cement take to dry?',
    answer: 'Cement sets in about 24 hours, but full curing and strength development can take up to 28 days.',
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 bg-yellow-100"
      style={{
        backgroundImage: 'url(/path/to/your/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 uppercase mb-4">Common queries answered</h2>
        <h1 className="text-2xl font-extrabold text-gray-800 uppercase mb-4">Some Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              className={`border rounded-lg p-4 cursor-pointer ${
                activeIndex === idx ? 'bg-yellow-200 border-gray-700' : 'bg-yellow-200 border-gray-300'
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                <span className="text-gray-600">{activeIndex === idx ? '-' : '+'}</span>
              </div>
              {activeIndex === idx && (
                <p className="text-gray-700 mt-2 text-left">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
