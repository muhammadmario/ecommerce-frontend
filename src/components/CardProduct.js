import React from "react";

function CardProduct({ image, price, title, desc }) {
  return (
    <div className="max-w-md p-2 shadow-lg rounded-md place-self-center">
      <img src={image} alt="clothes" className="rounded-md" />
      <div>
        <h1 className="text-xl font-bold uppercase">{title}</h1>
        <p className="font-light">{desc}</p>
        <div className="flex justify-between">
          <h2 className="font-semibold">Rp. {price}</h2>
          <span>⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
