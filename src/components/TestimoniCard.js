import React from "react";

function TestimoniCard({ img, name, desc }) {
  return (
    <div className="bg-blue-700 h-full rounded-lg box-border p-5 flex flex-col">
      <div className="w-full flex  items-center gap-2 mb-1">
        <div className="h-14 w-14 bg-green-400 rounded-lg">{img}</div>
        <h2>{name}</h2>
      </div>
      <p className="font-light text-start">{desc}</p>
    </div>
  );
}

export default TestimoniCard;
