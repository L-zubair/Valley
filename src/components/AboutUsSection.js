import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import StatsSection from "./StatsSection";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.3 } },
};

const zoomInImage = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

// Reusable Card Component
const Card = ({ title, image, alt, children }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
  >
    <img src={image} alt={alt} className="w-16 h-16 mb-4" loading="lazy" />
    <h3 className="text-xl font-bold text-yellow-700">{title}</h3>
    <p className="text-gray-700 mt-2 text-center">{children}</p>
  </motion.div>
);

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <motion.div variants={fadeInUp} className="my-12 px-4 text-center">
    <h2 className="text-4xl font-bold text-yellow-600">{title}</h2>
    {subtitle && <p className="text-gray-700 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

// Main Component
const AboutUsSection = () => {
  const values = [
    { name: "Honesty", description: "We believe in transparency and integrity in every action we take." },
    { name: "Purity", description: "Our commitment to purity drives our excellence." },
    { name: "Love", description: "Our commitment to love drives our excellence." },
    { name: "Dependability", description: "Our commitment to dependability drives our excellence." },
    { name: "Premium", description: "Our commitment to premium drives our excellence." },
  ];

  return (
    <div className="bg-yellow-100 w-full">
      <div className="w-[98%] mx-auto text-left">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <motion.img
            src="images/main-img.jpg"
            alt="Main Highlight"
            variants={zoomInImage}
            initial="hidden"
            animate="visible"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative text-center px-4"
          >
            <motion.h1 className="text-6xl md:text-8xl font-extrabold text-yellow-500" variants={fadeInUp}>
              Valley Cement
            </motion.h1>
            <motion.p className="text-lg md:text-2xl mt-4 text-white italic" variants={fadeInUp}>
              "Epitome of Strength and Trust"
            </motion.p>
          </motion.div>
        </div>

        {/* Epitome of Strength Section */}
        <SectionHeader
          title="Epitome Of Strength & Trust: Valley Cement"
          subtitle="In the heart of the magnificent Kashmir Valley, where nature’s beauty knows no bounds..."
        />

        {/* Plant Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="my-12 px-4 w-full"
        >
          <img
            src="images/main-img.jpg"
            alt="Plant"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Vision, Mission, and Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-4 w-full"
        >
          {/* Vision and Mission */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-center text-yellow-700">Our Vision</h2>
              <Card title="Vision" image="images/vision.jpg" alt="Vision">
                Reinforcing the base of every foundation and building on it with love and strength.
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-center text-yellow-700">Our Mission</h2>
              <Card title="Mission" image="images/mission.jpg" alt="Mission">
                Adding value by creating a positive impact on people’s hearts through meaningful structures.
              </Card>
            </motion.div>
          </div>

          {/* Values (Wider) */}
          <motion.div variants={fadeInUp} className="bg-yellow-50 p-6 rounded-lg shadow-md w-full">
            <h2 className="text-3xl font-bold text-center text-yellow-700">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {values.map((value, index) => (
                <Card key={index} title={value.name} image={`images/${value.name.toLowerCase()}.jpg`} alt={value.name}>
                  {value.description}
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats and Footer Sections */}
        <StatsSection />
        
          {/* Values (Wider) */}
          <motion.div variants={fadeInUp} className="bg-yellow-50 p-6 rounded-lg shadow-md w-full">
            <h2 className="text-3xl font-bold text-center text-yellow-700">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {values.map((value, index) => (
                <Card key={index} title={value.name} image={`images/${value.name.toLowerCase()}.jpg`} alt={value.name}>
                  {value.description}
                </Card>
              ))}
            </div>
          </motion.div>
    

        <Footer />
      </div>
    </div>
  );
};

export default AboutUsSection;
