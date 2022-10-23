import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PotraitCardHome from "./PotraitCardHome";
import model1 from "../assets/img/model-1.jpg";
import model2 from "../assets/img/model-2.jpg";
import model3 from "../assets/img/model-3.jpg";

function CarouselsHome() {
  return (
    <div className="hidden sm:block sm:place-self-center md:place-self-start row-span-3">
      <>
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          // showIndicators={false}
          interval={6000}
          autoPlay={true}
          infiniteLoop={true}
          className="w-full box-border"
        >
          <PotraitCardHome image={model1} />
          <PotraitCardHome image={model2} />
          <PotraitCardHome image={model3} />
        </Carousel>
      </>
    </div>
  );
}

export default CarouselsHome;
