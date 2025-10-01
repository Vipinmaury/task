import React from "react";

const TextGallery = () => {
  const leftCard = {
    img: "https://jingleholidaybazar.com/images/Leh03.jpg",
    title: "Week At Thiksey Monastery",
    description: "This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.",
    link: "https://wa.me/1234567890",
    linkText: "WhatsApp Now More Details"
  };

  const rightCards = [
    {
      img: "https://jingleholidaybazar.com/images/Solang-Valley.jpg",
      title: "Solang Valley",
      description: "A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit",
      link: "https://example.com/more",
      linkText: "Contact"
    },
    {
      img: "https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg",
      title: "Week At Beach in Goa",
      description: "Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa",
      link: "https://example.com/offer",
      linkText: "Contact"
    }
  ];

  return (
    <>
      <div className="max-w-9xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
          <img
            src={leftCard.img}
            alt={leftCard.title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
            <div>
              <a
                href={leftCard.title}
                className="block text-center font-bold text-lg sm:text-xl md:text-2xl text-sky-600 hover:underline mb-2 sm:mb-3"
              >
                {leftCard.title}
              </a>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{leftCard.description}</p>
            </div>
            <a
              href={leftCard.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs sm:text-sm md:text-base px-4 py-2 text-sky-600 font-semibold hover:underline transition-all duration-300"
            >
              {leftCard.linkText}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden h-full"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full sm:w-1/2 h-48 sm:h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
                <div>
                  <a
                    href={card.title}
                    className="block font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-sky-600 hover:underline mb-2 sm:mb-3"
                  >
                    {card.title}
                  </a>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">{card.description}</p>
                </div>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs sm:text-sm md:text-base px-4 py-2 text-sky-600 font-semibold hover:underline transition-all duration-300"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-br from-neutral-50 to-neutral-50 text-gray-800 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-full mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-2 sm:mb-3">
          Gallery
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <i>At Jingle Holiday Bazar All Over India Destination Gallery</i>
        </p>
      </section>
    </>
  );
};

export default TextGallery;
