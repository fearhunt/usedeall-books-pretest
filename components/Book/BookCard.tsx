import React from "react";
import Image from "next/image";

type Book = {

}

const getRandomizedBackgroundGradient = () => {
  const colors = [ "accent-red", "accent-green", "accent-orange", "accent-blue" ];
  const gradientDirections = [ "tl", "tr", "bl", "br" ];

  const randomFirstColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSecondColor = colors[Math.floor(Math.random() * colors.length)];
  const randomGradientDirection = gradientDirections[Math.floor(Math.random() * gradientDirections.length)];

  return `bg-gradient-to-${randomGradientDirection} from-${randomFirstColor} to-${randomSecondColor}`
};

const BookCard = (props: Book) => {
  return (
    <div className="bg-gradient-to-br from-accent-orange to-accent-red rounded-lg shadow-lg transition-all hover:scale-105 px-8 py-6 mt-24">
      <Image src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png" alt="Book Cover" width={400} height={600} className="rounded-lg shadow-xl -mt-24 mb-4" />
      <h5 className="text-xl text-white font-bold">
        The Intelligent Investor
      </h5>
      <p className="text-white text-sm">
        Benjamin Graham
      </p>
    </div>
  )
};

export default BookCard;