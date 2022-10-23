import React from "react";
import banner from "../assets/img/banner.png";

function Banner() {
  return (
    <div className="w-full  col-span-2 sm:py-2">
      <img src={banner} alt="banner" className="w-full" />
    </div>
  );
}

export default Banner;
