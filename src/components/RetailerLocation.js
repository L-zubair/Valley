import React, { useState } from "react";
import Footer from "./Footer";

const RetailerLocation = () => {
  // State for retailers and search query
  const [searchQuery, setSearchQuery] = useState("");
  const retailers = [
    {
      name: "Dar Cement Store",
      location: "Khrew, Pampore 191103",
      contact: "9194533730",
    },
    {
      name: "Mir Cement Store",
      location: "Srinagar, Jammu and Kashmir 191101",
      contact: "9194533730",
    },
    {
      name: "Ahmad Cement Store",
      location: "Pulwama, Jammu and Kashmir 191103",
      contact: "9187654321",
    },
    {
      name: "Ahmad Cement Store",
      location: "Pulwama, Jammu and Kashmir 191103",
      contact: "9187654321",
    },
    {
      name: "Ahmad Cement Store",
      location: "Pulwama, Jammu and Kashmir 191103",
      contact: "9187654321",
    },
    // Add more retailers here if needed
  ];

  // Filtered retailers based on the search query
  const filteredRetailers = retailers.filter(
    (retailer) =>
      retailer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      retailer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow p-6 bg-yellow-100">
        <h1 className="text-3xl font-bold text-yellow-600 text-center">
          Retailer Locations
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Enter location or PIN code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 rounded-l-lg border border-gray-300 w-full max-w-md"
          />
          <button className="bg-yellow-500 text-white p-3 rounded-r-lg font-bold hover:bg-yellow-600">
            Search
          </button>
        </div>

        {/* Retailer Cards */}
        <div
          className={`mt-8 ${
            filteredRetailers.length > 0
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex justify-center items-center"
          }`}
        >
          {filteredRetailers.length > 0 ? (
            filteredRetailers.map((retailer, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-yellow-700">
                  {retailer.name}
                </h2>
                <p className="text-gray-600 mt-2">{retailer.location}</p>
                <p className="text-gray-600 mt-2">Contact: {retailer.contact}</p>
                <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600">
                  Direction
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-xl">
              No retailers found matching your search.
            </p>
          )}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default RetailerLocation;
