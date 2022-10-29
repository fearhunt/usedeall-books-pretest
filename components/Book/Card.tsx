import React from "react";
import Image from "next/image";

type Book = {

}

const BookCard = (book: Book) => {
  return (
    <div onClick={() => console.log('a')} className="bg-gradient-to-br from-accent-orange to-accent-red cursor-pointer rounded-lg shadow-lg transition-all hover:scale-105 p-5 md:px-8 md:py-6 mt-20">
      <Image src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png" alt="Book Cover" width={400} height={600} className="rounded-lg shadow-xl -mt-24 mb-4" />
      <h5 className="text-md md:text-xl  text-white font-bold">
        The Intelligent Investor
      </h5>
      <p className="text-white text-xs md:text-sm">
        Benjamin Graham
      </p>
    </div>
  )
};

export default BookCard;