import React from "react";
import Image from "next/image";

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
  }
}

const BookCard = (props: BookProps) => {
  return (
    <div onClick={() => console.log('a')} className="bg-gradient-to-br from-accent-orange to-accent-red cursor-pointer rounded-lg shadow-lg transition-all hover:scale-105 p-5 md:px-8 md:py-6 mt-20">
      <Image src={props.book.cover_url} alt={`${props.book.title} by ${(props.book.authors).join(", ")}`} width={400} height={600} className="rounded-lg shadow-xl -mt-24 mb-4" />
      <h5 className="text-md md:text-xl text-white font-bold truncate">
        {props.book.title}
      </h5>
      <p className="text-white text-xs md:text-sm">
        {(props.book.authors).join(", ")}
      </p>
    </div>
  )
};

export default BookCard;