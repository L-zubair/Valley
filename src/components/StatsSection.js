import React from 'react';

const stats = [
  { label: 'Production Capacity', value: 5310 },
  { label: 'Quality Standards', value: 5310 },
  { label: 'Happy Clients', value: 5310 },
  { label: 'Customer Reach', value: 5310 },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-yellow-100 shadow-inner">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg transform transition-transform hover:scale-105"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{stat.value}</h3>
            <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
