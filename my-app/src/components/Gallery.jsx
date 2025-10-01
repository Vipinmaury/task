import React from "react";
import { motion } from "framer-motion";

const Gallery = ({ title, images, buttonText }) => {
  return (
    <>
      <section className="max-w-9xl mx-auto my-6 sm:my-8 md:my-12 px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg shadow-lg group min-h-[280px] max-h-[320px] sm:min-h-[320px] sm:max-h-[360px] md:min-h-[384px] md:max-h-[400px] lg:h-[500px] lg:min-h-0 lg:max-h-none"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {images[0].caption}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-rows-2 gap-4 sm:gap-6 md:gap-8 lg:h-[500px]">
            {images.slice(1).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.2, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg shadow-lg group min-h-[280px] max-h-[320px] sm:min-h-[320px] sm:max-h-[360px] md:min-h-[384px] md:max-h-[400px] lg:min-h-0 lg:max-h-none lg:h-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-lg">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {buttonText && (
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white border-2 border-transparent hover:from-transparent hover:to-transparent hover:border-sky-600 hover:text-sky-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {buttonText}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
