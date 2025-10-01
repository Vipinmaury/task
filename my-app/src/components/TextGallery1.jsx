import React from "react";

const TextGallery1 = () => {
  const leftCards = [
    {
      img: "https://jingleholidaybazar.com/images/Taj-Aravali-Resort-Spa.jpg",
      title: "Taj Aravali Resort & Spa",
      description:
        "Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night",
    },
    {
      img: "https://jingleholidaybazar.com/images/172808300.jpg",
      title: "Holtel Snow Valley",
      description:
        "Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night",
    },
  ];

  const rightCard = {
    img: "https://jingleholidaybazar.com/images/5.jpg",
    title: "Hideout Premiere",
    description:
      "Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it's the beaches ₹ 4499+",
  };

  return (
    <div className="max-w-9xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {leftCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden">
            <img
              src={card.img}
              alt={card.title}
              className="w-full sm:w-1/2 h-48 sm:h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center items-start sm:w-1/2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">{card.title}</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
        <img
          src={rightCard.img}
          alt={rightCard.title}
          className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-2 sm:mb-3 text-gray-800">{rightCard.title}</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">{rightCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TextGallery1;
