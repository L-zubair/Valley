import React from 'react';

const services = [
  {
    title: 'Support',
    description: 'Cemtac Cements Pvt Ltd has established its own state-of-the-art training which contains training programs, covering all trades.',
    icon: 'images/logo.jpg',
  },
  {
    title: 'Business Planning',
    description: 'At Vallel Cements Pvt Ltd our goal is to build a sustainable business.',
    icon: 'images/logo.jpg',
  },
  {
    title: 'Target Marketing',
    description: 'Highly specialized and professional team of Sales & Marketing focuses on delivering customers quality products.',
    icon: 'images/logo.jpg',
  },
  {
    title: 'Solutions',
    description: 'Our products are all around us, providing strength and durability to buildings of soaring dimensions.',
    icon: 'images/logo.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-yellow-100 shadow-inner">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg transform transition-transform hover:scale-105"
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
