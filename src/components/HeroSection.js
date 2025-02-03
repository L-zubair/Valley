import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/main-img.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-white flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We Provide Best <br /> Business Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Deliver your value proposition with clarity and confidence.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-center">
          {/* Optionally, you can add another decorative element or leave it empty */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
