// components/NewsletterSection.js
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-10 bg-yellow-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Don’t Miss Latest Updates</h2>
        <p className="text-lg text-gray-600">Receive updates and news directly from our team</p>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-l"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
