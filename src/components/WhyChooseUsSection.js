import React from 'react'; 

const features = [
  {
    title: 'Sensitive Environment',
    description: 'Our products are all around us, providing strength and durability to buildings of soaring dimensions.',
    icon: 'images/main-img.jpg',
  },
  {
    title: 'Performance Measures',
    description: 'Welcome to Cemtac Cement Company and their associated companies. We are a leading manufacturer of cement and construction materials in J&K.',
    video: 'images/main-img.jpg',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-yellow-100">
      <div className="container mx-auto px-6 bg-yellow-100   ">
        <h2 className="text-2xl font-extrabold text-gray-800 uppercase mb-4 text-center">Why People Choose Us?</h2>
        <h1 className="text-2xl font-extrabold text-gray-800 uppercase mb-4 text-center">We provide sustainable solutions for all.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg transform transition-transform hover:scale-105"
            >
              <video 
  src={feature.video} 
  className="w-100% h-100% mb-8" 
  controls 
  autoPlay 
  loop 
  muted 
  alt={feature.title}>
  Your browser does not support the video tag.
</video>

              <h3 className="text-xl font-bold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
