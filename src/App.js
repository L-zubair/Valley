import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import CareersSection from "./components/CareersSection"; // Import the ContactUs component
import ApplicationForm from "./components/ApplicationFrom";
import RetailerLocation from "./components/RetailerLocation";
import Dealerlocation from "./components/Dealerlocation";
import OurProcess from "./components/OurProcess";
import OpcValley from "./components/OpcValley";
const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar /> {/* Navbar remains visible across all routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <StatsSection />
                <WhyChooseUsSection />
                <ProjectsSection />
                <TeamSection />
                <NewsletterSection />
                <Footer />
              </>
            }
          />
          <Route path="/contact-us" element={<ContactUs />} /> {/* Route for ContactUs */}
          <Route path="/AboutUsSection" element={<AboutUsSection />} /> {/* Route for ContactUs */}
          
          <Route path="/CareersSection" element={<CareersSection />} /> {/* Route for ContactUs */}
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/RetailerLocation" element={<RetailerLocation />} /> {/* Route for ContactUs */}
          <Route path="/Dealerlocation" element={<Dealerlocation />} /> {/* Route for ContactUs */}
          <Route path="/OurProcess" element={<OurProcess />} /> {/* Route for ContactUs */}
          <Route path="/OpcValley" element={<OpcValley />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
