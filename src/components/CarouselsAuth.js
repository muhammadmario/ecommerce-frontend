import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimoniCard from "./TestimoniCard";

function CarouselsAuth() {
  return (
    <>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        // showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        className="w-full box-border"
      >
        <TestimoniCard
          name="Mario"
          desc="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
        />
        <TestimoniCard
          name="Mesis"
          desc="lorem ipsum dolor si amtasas sasa lasja asasa lorem ipsum dolor si
        amtasas sasa lasja asasa lorem i"
        />
        <TestimoniCard
          name="Narutoh"
          desc="simply dummy text of the printing and typesetting industry."
        />
      </Carousel>
    </>
  );
}

export default CarouselsAuth;
