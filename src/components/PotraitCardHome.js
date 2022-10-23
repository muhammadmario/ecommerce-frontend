import React from "react";

function PotraitCardHome({ image }) {
  return (
    <div className="p-2">
      <img src={image} alt="model" className="bg-contain h-full rounded-lg" />
    </div>
  );
}

export default PotraitCardHome;
