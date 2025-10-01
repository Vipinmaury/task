import React, { useState } from "react";
import { motion } from "framer-motion";

const galleryData = {
  "North India": [
    { src: "https://jingleholidaybazar.com/images/Red-Fort.jpg", name: "Delhi" },
    { src: "https://jingleholidaybazar.com/images/Shimla1.jpg", name: "Shimla" },
    { src: "https://jingleholidaybazar.com/images/Taj-mahal.jpg", name: "Agra" },
    { src: "https://jingleholidaybazar.com/images/Manali1-1.jpg", name: "Kullu Manali" },
    { src: "https://jingleholidaybazar.com/images/Mussoorie1.jpg", name: "Mussoorie ans Dehardun" },
    { src: "https://jingleholidaybazar.com/images/Khajjiar.jpg", name: "DalHousie" },
    { src: "https://jingleholidaybazar.com/images/Jim-Corbett.jpg", name: "Jim Corpett National Park" },
    { src: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg", name: "Amritsar" },
  ],
  "East India": [
    { src: "https://jingleholidaybazar.com/images/Ziro-Valley.jpg", name: "Ziro Valley" },
    { src: "https://jingleholidaybazar.com/images/Kaziranga.jpg", name: "Kaziranga National Park" },
    { src: "https://jingleholidaybazar.com/images/Pelling.jpg", name: "Pelling" },
    { src: "https://jingleholidaybazar.com/images/Gangtok.jpg", name: "Gangtok" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp", name: "Puri" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp", name: "Sikkim" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", name: "Digha" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp", name: "Guwahati" },
  ],
  "West India": [
    { src: "https://jingleholidaybazar.com/images/Goa-beaches.jpg", name: "Goa" },
    { src: "https://jingleholidaybazar.com/images/2021006-1895800595.jpg", name: "Mumbai" },
    { src: "https://jingleholidaybazar.com/images/1539784236_1514009275_mahabaleshwar.jpg", name: "Mahabaleswar" },
    { src: "https://jingleholidaybazar.com/images/Sydney_point_panchghani.jpg", name: "Panchgani" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp", name: "Goa Beaches" },
    { src: "https://jingleholidaybazar.com/images/SHIRDI.jpg", name: "Shirdi" },
    { src: "https://jingleholidaybazar.com/images/Karla-Caves.jpg", name: "Khandala" },
    { src: "https://jingleholidaybazar.com/images/rajmachi-fort-trek-lonavala.jpg", name: "Lonavala" },
  ],
  "South India": [
    { src: "https://jingleholidaybazar.com/images/Coorg-1.jpg", name: "Coorg" },
    { src: "https://jingleholidaybazar.com/images/Bangalore-Karnataka-1.jpg", name: "Bengalore" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", name: "Coorg" },
    { src: "https://jingleholidaybazar.com/images/Chennai-1.jpg", name: "Chennai" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp", name: "Hyderabad" },
    { src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp", name: "Madurai" },
    { src: "https://jingleholidaybazar.com/images/Hampi-1.jpg", name: "Hampi" },
    { src: "https://jingleholidaybazar.com/images/Munnar-Kerala-1.jpg", name: "Munnar" },
  ],
};

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("North India");

  return (
    <>
      <div className="max-w-9xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden"></div>

          <div className="overflow-x-auto scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
            <div className="flex md:flex-wrap gap-2 sm:gap-3 md:gap-4 min-w-max md:min-w-0 border-b border-gray-300">
              {Object.keys(galleryData).map((region) => {
                const isActive = activeTab === region;
                return (
                  <button
                    key={region}
                    onClick={() => setActiveTab(region)}
                    className={`
                      relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
                      text-sm sm:text-base md:text-lg font-semibold
                      whitespace-nowrap
                      transition-all duration-300
                      border border-transparent border-b-0 -mb-px
                      ${
                        isActive
                          ? "border-gray-300 border-b-transparent text-sky-600 bg-white shadow-sm"
                          : "text-gray-600 hover:border-gray-200 hover:border-b-transparent hover:text-sky-500 hover:bg-gray-50"
                      }
                    `}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-3 sm:p-4 md:p-6 bg-white shadow-sm">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {galleryData[activeTab].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                <a
                  href="#"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center py-2.5 sm:py-3 font-semibold text-sm sm:text-base hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-neutral-50 to-neutral-200 text-gray-800 px-4 sm:px-6 py-6 sm:py-8 md:py-10 max-w-full mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-2 sm:mb-3">
          POPULAR HOTELS
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <i>
            At Jingle Holiday Bazar we provide the best hotel facilities for
            both National and International destinations
          </i>
        </p>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default GalleryTabs;
