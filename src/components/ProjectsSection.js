import React from 'react';

const feedbacks = [
  {
    name: 'John Doe',
    feedback: 'This company provides excellent services and their products are of top-notch quality!',
    avatar: 'path/to/avatar1.png',
  },
  {
    name: 'Jane Smith',
    feedback: 'Amazing experience! The customer support team is very responsive and helpful.',
    avatar: 'path/to/avatar2.png',
  },
  {
    name: 'Robert Brown',
    feedback: 'Highly recommend their solutions. They truly deliver what they promise!',
    avatar: 'path/to/avatar3.png',
  },
  {
    name: 'Lone Zubair',
    feedback: 'Highly recommend their solutions. They truly deliver what they promise!',
    avatar: 'path/to/avatar3.png',
  },
];

const ProjectsSection = () => {
  return (
    <section
      className="py-16 bg-yellow-100"
      style={{
        backgroundImage: 'url(/path/to/your/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center bg-yellow-100 ">
        <h2 className="text-2xl font-extrabold text-gray-800 uppercase mb-4">What’s Our Customer Saying</h2>
        <h1 className="text-4xl font-bold text-gray-700 mb-12">
          Some positive feedback about us that encourage
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg transform transition-transform hover:scale-105"
            >
              <img
                src={feedback.avatar}
                alt={feedback.name}
                className="w-16 h-16 rounded-full mb-6"
              />
              <p className="text-gray-600 text-center italic mb-4">"{feedback.feedback}"</p>
              <h3 className="text-xl font-bold text-gray-700">{feedback.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
