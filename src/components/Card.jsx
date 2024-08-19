import React from "react";

const Card = ({ image, title, description, year }) => {
  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm mb-2">Start production: {year}</p>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
