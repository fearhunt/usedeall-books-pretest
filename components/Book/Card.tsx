import React from "react";
import Image from "next/image";
import clsx from "clsx";

type BookProps = {
  book: {
    id: number;
    title: string;
    category_id: number;
    authors: string[];
    cover_url: string;
    description: string;
    sections: {
      title: string;
      content: string;
    }[];
    audio_length: number;
  },
  bookIndex: number
}

const BookCard = (props: BookProps) => {
  return (
    <div 
      onClick={() => console.log('a')} 
      className={clsx(
        "cursor-pointer rounded-lg shadow-lg transition-all hover:scale-105 p-5 md:px-8 md:py-6 mt-20",
        { "bg-usedeall-gradient-0": (props.bookIndex % 6) == 0},
        { "bg-usedeall-gradient-1": (props.bookIndex % 6) == 1},
        { "bg-usedeall-gradient-2": (props.bookIndex % 6) == 2},
        { "bg-usedeall-gradient-3": (props.bookIndex % 6) == 3},
        { "bg-usedeall-gradient-4": (props.bookIndex % 6) == 4},
        { "bg-usedeall-gradient-5": (props.bookIndex % 6) == 5},
      )}
    >
      <Image src={props.book.cover_url} alt={`${props.book.title} by ${(props.book.authors).join(", ")}`} width={400} height={600} className="rounded-lg shadow-xl -mt-24 mb-4" />
      <h5 className="text-md md:text-xl text-white font-bold truncate">
        {props.book.title}
        {props.bookIndex}
      </h5>
      <p className="text-white text-xs md:text-sm truncate">
        {(props.book.authors).join(", ")}
      </p>
    </div>
  )
};

export default BookCard;