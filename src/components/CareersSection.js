import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const CareersSection = () => {
  const navigate = useNavigate();

  const handleApplyNow = (jobTitle) => {
    navigate("/apply", { state: { jobTitle } });
  };

  return (
    <div className="bg-yellow-50 text-left">
      {/* Careers Header Section */}
      <div className="relative w-full h-96">
        <img
          src="images/main-img.jpg"
          alt="Careers Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-6xl font-extrabold text-yellow-500">Join Our Team</h1>
          <p className="text-lg mt-4 text-white italic">
            "Be a part of our journey to build the future"
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="my-12 px-8">
        <h2 className="text-3xl font-bold text-center text-yellow-700">
          Why Work With Us?
        </h2>
        <p className="text-gray-800 mt-4 text-center">
          At Valley Cement, we believe in building not only strong structures but also strong careers. 
          Join our dedicated team of professionals and contribute to shaping the future with innovation, 
          sustainability, and excellence.
        </p>
      </div>

      {/* Open Positions Section */}
      <div className="my-12 px-8">
        <h2 className="text-3xl font-bold text-center text-yellow-700">Current Openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Sales Executive",
              location: "Srinagar, Kashmir",
              description:
                "We are looking for experienced sales professionals with excellent communication and negotiation skills.",
            },
            {
              title: "Mechanical Engineer",
              location: "Plant Site, Kashmir",
              description:
                "An experienced mechanical engineer to handle maintenance and operations of our plant equipment.",
            },
            {
              title: "Quality Control Manager",
              location: "Plant Site, Kashmir",
              description:
                "A specialist in quality control to ensure our products meet the highest standards.",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-yellow-700">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <button
                onClick={() => handleApplyNow(job.title)} // Added the missing onClick handler
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

{/* Career Growth Section */}
<div className="my-12 px-8 flex justify-center">
  <div className="w-[100%] bg-white py-10 rounded-lg shadow-md pl-8">
    <h2 className="text-3xl font-bold text-center text-yellow-700">Career Growth</h2>
    <p className="text-gray-800 mt-4 text-center">
      At Valley Cement, we prioritize your growth as much as our own. We offer:
    </p>
    <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3 pl-8">
      <li>Opportunities to work on innovative and impactful projects</li>
      <li>Comprehensive training and development programs</li>
      <li>Career progression aligned with your potential</li>
      <li>A supportive and inclusive work environment</li>
    </ul>
  </div>
</div>


      {/* Call to Action */}
      <div className="my-12 px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-700">Ready to Join Us?</h2>
        <p className="text-gray-700 mt-4">
          Explore your potential and make a difference with Valley Cement. We look forward to welcoming you to our team!
        </p>
        <button
          onClick={() => navigate("/apply")} // Added a navigation for "View All Openings"
          className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
        >
          View All Openings
        </button>
      </div>
        <Footer />
    </div>
  );
};

export default CareersSection;
