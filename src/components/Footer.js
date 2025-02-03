import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-900 p-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
        {/* Product Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Product</h3>
          <ul className="space-y-2">
            <li><Link to="/OurProcess" className="hover:underline">OUR PROCESS</Link></li>
            <li><Link to="/OpcValley" className="hover:underline">OPC VALLEY</Link></li>
          </ul>
        </div>
        
        {/* Corporate Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Corporate</h3>
          <ul className="space-y-2">
            <li><Link to="/AboutUsSection" className="hover:underline">ABOUT US</Link></li>
            <li><Link to="/CareersSection" className="hover:underline">CAREERS</Link></li>
          </ul>
        </div>
        
        {/* Community Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Community</h3>
          <ul className="space-y-2">
            <li>Community Solutions</li>
            <li>Sustainability</li>
          </ul>
        </div>
        
        {/* Our Networks Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Our Networks</h3>
          <ul className="space-y-2">
            <li><Link to="/OurProcess" className="hover:underline">OUR PROCESS</Link></li>
            <li><Link to="/OpcValley" className="hover:underline">OPC VALLEY</Link></li>
          </ul>
        </div>
        
        {/* Certifications Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Certifications</h3>
          <ul className="space-y-2">
            <li>SA 8000</li>
            <li>OHSAS 18001</li>
            <li>ISO 9001</li>
            <li>ISO 14001</li>
          </ul>
        </div>
        
        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Subscribe to Our Newslettr</h3>
          <form className="flex gap-2 mt-2">
            <input type="email" placeholder="Email" className="flex-1 p-2 border border-gray-300 rounded" />
            <button type="submit" className="p-2 bg-gray-900 text-white rounded hover:bg-gray-700">Submit</button>
          </form>
          
          <div className="mt-4">
            <p>Social Media</p>
            <div className="flex gap-2 mt-2">
              {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map(platform => (
                <a key={platform} href="https://lonetech.framer.website/" aria-label={platform} className="w-9 h-9 flex items-center justify-center bg-white text-gray-900 rounded-full hover:bg-gray-900 hover:text-white">
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6 pt-4 border-t border-gray-300 text-sm">
        <p>
          © 2025 Valley Cement. All Rights Reserved. Powered by 
          <a href="https://lonetech.framer.website/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline"> LoneTech</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
