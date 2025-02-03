import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const videoVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// Step Component
const Step = ({ title, description, videoSrc, reverse }) => (
  <motion.div
    className={`flex flex-col ${
      reverse ? "sm:flex-row-reverse" : "sm:flex-row"
    } items-center bg-white p-8 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-6`}
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
  >
    {/* Text Section */}
    <motion.div
      className="flex-[2] sm:p-4"
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-semibold text-yellow-700">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </motion.div>

    {/* Video Section */}
    <motion.div
      className="flex-[3]"
      variants={videoVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <video
        className="w-full h-[50vh] bg-black rounded-lg"
        controls
        style={{ maxHeight: "350px" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </motion.div>
);

const OurProcess = () => (
  <>
    <div className="bg-yellow-100 flex flex-col items-center">
      <div className="w-[98%] bg-yellow-100 rounded-lg">
        {/* Header Section */}
        <motion.div
          className="relative h-screen w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="images/background-process.jpg"
            alt="Process Banner"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-extrabold text-yellow-500">OUR PROCESS</h1>
          </motion.div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="py-6 px-4 text-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-yellow-700">
            A Symphony of Precision - Meticulously Engineered for Creation.
          </h2>
          <p className="text-gray-800 mt-4">
            Our plant is situated in the landscapes of Khonmoh, District Srinagar,
            Jammu & Kashmir. Powered by cutting-edge Rotary technology from M/s F.L.
            Smidth Limited, exemplifies our unwavering dedication to superior cement
            production. Experience the perfect blend of tradition and modernity, where
            architectural brilliance thrives amidst the heart of nature.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8 px-6 py-4">
          {[
            {
              title: "Limestone Extraction",
              description:
                "The process begins with extracting limestone while continuously monitoring the drill holes and the blasted materials, frequently checking and segregating the raw material into two grades: High-Grade Limestone and Low-Grade Limestone.",
              videoSrc: "videos/limestone-extraction.mp4",
            },
            {
              title: "Crushing and Mixing",
              description:
                "A blend of precision and technology to achieve the perfect mixture.",
              videoSrc: "videos/crushing-mixing.mp4",
            },
            {
              title: "Heating and Kilning",
              description:
                "High temperatures and cutting-edge technology transform raw materials into clinker.",
              videoSrc: "videos/heating-kilning.mp4",
            },
            {
              title: "Clinker Grinding",
              description:
                "The clinker is finely ground to produce high-quality cement.",
              videoSrc: "videos/clinker-grinding.mp4",
            },
            {
              title: "Packaging and Dispatch",
              description:
                "The final step, ensuring our products are safely delivered to customers.",
              videoSrc: "videos/packaging-dispatch.mp4",
            },
          ].map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              videoSrc={step.videoSrc}
              reverse={index % 2 !== 0} // Alternate layout
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default OurProcess;
