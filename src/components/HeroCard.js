import React from "react";
import clothes from "../assets/img/clothes.jpg";

function HeroCard() {
  return (
    <div className="p-2 shadow-lg rounded-md flex flex-col col-span-2">
      <img
        src={clothes}
        alt="clothes"
        className="rounded-md sm:h-32 md:h-40 lg:h-60 object-cover w-full"
      />
      <div>
        <h1 className="text-2xl font-bold uppercase">Roghnet Blue</h1>
        <p className="font-light">lorem</p>
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Rp.100.000</h2>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
