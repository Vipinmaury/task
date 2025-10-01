import React, { useState } from "react";
import { FaHome, FaBed, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

// Single Card Component
const Card = ({ icon, title, text }) => {
  const [readMore, setReadMore] = useState(false);

  // Animation Variants (Flip Left-to-Right)
  const flipVariants = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl flex flex-col items-center p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500">
      {/* Icon - Responsive size */}
      <div className="text-green-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 md:mb-5 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>

      {/* Animated Content */}
      <motion.div
        variants={flipVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col items-center text-center w-full"
      >
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">
          {title}
        </h3>

        {/* Description with smooth expand */}
        <p
          className={`text-gray-600 text-xs sm:text-sm md:text-base transition-all duration-500 overflow-hidden leading-relaxed ${
            readMore ? "max-h-[500px] sm:max-h-[600px]" : "max-h-[60px] sm:max-h-[80px] md:max-h-[100px]"
          }`}
        >
          {text}
        </p>

        {/* Button - Responsive */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-3 sm:mt-4 md:mt-5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-sky-900 to-blue-900 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      </motion.div>
    </div>
  );
};


const CardRow = () => {
  const cards = [
    {
      icon: <FaHome />,
      title: "Jingle Holiday Bazar Homestays",
      text: `Book Villas, Apartments and Resorts. Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment, Jingle Holiday Bazar Homestays is the answer. It already has over 3500 homestay properties and is expanding fast across India.`,
    },
    {
      icon: <FaBed />,
      title: "Beautiful Nature Villas",
      text: `Experience serene villas in the lap of nature. Perfect for family holidays and peaceful retreats. Each property is selected carefully for its comfort, location, and scenic beauty.`,
    },
    {
      icon: <FaPlane />,
      title: "Luxury Resorts & Flights",
      text: `Stay in luxury resorts offering world-class amenities, fine dining, and personalized services. Ideal for those looking for a premium holiday experience. Book flights and hotels together for exclusive discounts.`,
    },
  ];

  return (
    <>
      {/* Cards Container - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>

      {/* Popular Destination Section - Responsive */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-200 text-gray-800 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 max-w-full mx-auto my-6 sm:my-8 md:my-10 lg:my-12">
        {/* Heading - Responsive */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-3 sm:mb-4 md:mb-5">
          POPULAR DESTINATION IN INDIA
        </h2>

        {/* Paragraph - Responsive without hardcoded breaks */}
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <i>
            India is a vibrant land of startling contrasts where both the
            traditional and modern worlds meet. The world's seventh largest
            nation by area and the second largest in terms of population, India
            boasts a rich heritage that's the result of centuries of different
            cultures and religions leaving their mark.
          </i>
        </p>
      </section>
    </>
  );
};

export default CardRow;
