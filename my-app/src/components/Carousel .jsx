import React, { useState, useEffect, useRef } from "react";

const slides = [
  { 
    src: "https://jingleholidaybazar.com/images/himalay.webp", 
    location: "Himalaya, Uttarakhand" 
  },
  { 
    src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp", 
    location: "Goa Beaches" 
  },
  { 
    src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp", 
    location: "Kerala Backwaters" 
  },
  { 
    src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp", 
    location: "Rajasthan Heritage" 
  },
  { 
    src: "https://jingleholidaybazar.com/images/registan.webp", 
    location: "Rajsthan " 
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = slides.length;
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrent(index);
    resetAutoSlide();
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, length]);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsPaused(false);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  return (
    <>
      <div
        className="relative w-full overflow-hidden -mt-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:px-8"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          <div className="relative text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-lg">
              Welcome to Jingle Holiday Bazar Pvt Ltd.
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-neutral-100 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl drop-shadow-md">
              {slides[current].location}
            </p>
            <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-2 sm:gap-3">
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-white hover:bg-neutral-50 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.location}
              className="w-full flex-shrink-0 object-cover h-72 sm:h-96 md:h-[32rem] lg:h-[36rem] xl:h-[40rem] 2xl:h-[44rem]"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-3 md:left-4 lg:left-6 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 lg:p-3.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl"
          aria-label="Previous slide"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-3 md:right-4 lg:right-6 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 lg:p-3.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl"
          aria-label="Next slide"
        >
          ❯
        </button>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-6 sm:w-8 md:w-10"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 z-20 text-white/70 text-xs sm:text-sm">
          {isPaused ? "⏸" : "▶"}
        </div>
      </div>

      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 -mt-1 text-gray-800 px-4 sm:px-6 py-6 sm:py-8 md:py-10 max-w-full mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-3 sm:mb-4">
          OUR SERVICES
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <i>At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget</i>
        </p>
      </section>
    </>
  );
};

export default Carousel;
