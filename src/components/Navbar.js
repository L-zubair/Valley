import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close the dropdown
    } else {
      setOpenDropdown(index); // Open the corresponding dropdown
    }
  };

  const handleNavItemClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Close the menu
    setMenuActive(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleNavItemClick}>
          Valley Cemant
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={menuActive ? "toggle-icon close" : "toggle-icon"}></span>
        </button>
        <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleDropdown(1)}
            >
              Products
            </button>
            <ul
              className={`dropdown-menu ${openDropdown === 1 ? "show" : ""}`}
            >
              <li className="nav-item">
            <Link to="/OurProcess" className="nav-links" onClick={handleNavItemClick}>
            OurProcess
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/OpcValley" className="nav-links" onClick={handleNavItemClick}>
            OPCVALLEY
            </Link>
          </li>
            </ul>
          </li>
          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleDropdown(2)}
            >
              Corporate
            </button>
            <ul
              className={`dropdown-menu ${openDropdown === 2 ? "show" : ""}`}
            >
              <li className="nav-item">
                <Link to="/AboutUsSection" className="nav-links" onClick={handleNavItemClick}>
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CareersSection" className="nav-links" onClick={handleNavItemClick}>
                  Careers
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => handleDropdown(3)}
            >
              Our Network
            </button>
            <ul
              className={`dropdown-menu ${openDropdown === 3 ? "show" : ""}`}
            >
              <li className="nav-item">
                <Link to="/RetailerLocation" className="nav-links" onClick={handleNavItemClick}>
                  RetailerLocation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Dealerlocation" className="nav-links" onClick={handleNavItemClick}>
                  Dealerlocation
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={handleNavItemClick}>
              Contact-us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
