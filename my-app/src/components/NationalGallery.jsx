import React from "react";
import Gallery from "./Gallery";

const NationalGallery = () => {
  return (
    <Gallery
      title="Popular Destinations in India"
      images={[
        {
          src: "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg",
          alt: "Amritsar",
          caption: "Amritsar, Punjab",
        },
        {
          src: "https://jingleholidaybazar.com/images/Gangtok.jpg",
          alt: "Gangtok",
          caption: "Gangtok, Sikkim",
        },
        {
          src: "https://jingleholidaybazar.com/images/Taj-mahal.jpg",
          alt: "Agra",
          caption: "Agra, Uttar Pradesh",
        },
      ]}
    />
  );
};

export default NationalGallery;
