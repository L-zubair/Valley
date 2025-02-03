import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const OpcValley = () => {
  const sections = [
    {
      title: "OPC 43 Grade Cement:",
      description:
        "Synonym to Strength and Reliability OPC 43 Grade Cement is a preferred choice for construction professionals, offering exceptional strength, reliability, and versatility. Its optimal composition ensures long-lasting durability, while its fine particle size enhances workability. With rigorous quality control measures, you can trust that every bag of OPC 43 Grade Cement delivers consistent performance, providing a solid foundation for your construction projects.",
      image: "images/logo.jpg",
    },
    {
      title: "OPC 53 Grade Cement",
      description:
        "OPC 53 is the grade that ensures high strength and durability. Lorem ipsum dolor sit amet.",
      image: "images/main-img.jpg",
    },
    {
      title: "Benefits of Valley Cement",
      description:
        "Experience the unmatched quality of Valley Cement, ensuring high performance and durability in every project.",
      image: "images/main-img.jpg",
    },
  ];

  return (
    <>
    <div className="bg-yellow-100 min-h-screen">
      {/* Header Section */}
      <div className="relative w-full h-screen bg-yellow-200">
        <motion.img
          src="images/main-img.jpg"
          alt="Valley OPC Cement"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <motion.h1
            className="text-5xl font-bold text-yellow-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            VALLEY OPC CEMENT
          </motion.h1>
          <motion.p
            className="text-white text-lg mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Dil Se Bani
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-md shadow-md">
              Scroll Down
            </button>
          </motion.div>
        </div>
      </div>

      <div className="py-6 px-4 text-center">
        <motion.h2
          className="text-2xl font-bold text-yellow-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Dil Se Bani Imarat Ki Pehchaan
        </motion.h2>
        <motion.p
          className="text-gray-800 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We take immense pride in offering our flagship product, Khyber OPC
          (Ordinary Portland Cement). Our team of dedicated engineers ensures
          that every batch of OPC cement is manufactured with precision and
          care. From sourcing the finest raw materials to implementing
          stringent quality control measures, our unwavering commitment is to
          deliver a cement that epitomizes strength and embodies the purest
          form imaginable. The state-of-the-art manufacturing facility at
          Khonmoh utilizes cutting-edge, fully-automated, and dry manufacturing
          processes to create concrete structures that are not only strong and
          reliable but also infused with warmth and integrity.
        </motion.p>
      </div>

      {/* Sections with Text and Images in Same Div */}
      <div className="space-y-10 py-10 px-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-yellow-50 p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.div
              className="flex-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </motion.div>
            {/* Text Box */}
            <motion.div
              className="flex-1 p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-yellow-700">
                {section.title}
              </h2>
              <p className="text-gray-800 mt-4">{section.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OpcValley;
