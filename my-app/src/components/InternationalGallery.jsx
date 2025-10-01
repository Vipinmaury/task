import React from "react";
import Gallery from "./Gallery";

const InternationalGallery = () => {
  return (
    <Gallery
      title="Popular International Destinations"
      images={[
        {
          src: "https://jingleholidaybazar.com/images/DUBAI1.jpg",
          alt: "Dubai",
          caption: "Dubai, UAE",
        },
        {
          src: "https://jingleholidaybazar.com/images/caption.jpg",
          alt: "Sydney",
          caption: "Sydney, Australia",
        },
        {
          src: "https://jingleholidaybazar.com/images/download%20(8).jpg",
          alt: "Singapore",
          caption: "Singapore",
        },
      ]}
       buttonText="All Destinations"
    />
  );
};

export default InternationalGallery;
