import React from "react";

import BookCard from "./Card";

type BookGridProps = {
  books: {
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
  }[];
}

const BookGrid = (props: BookGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-2">
      {props.books.map((book: any, index: number) => (
        <BookCard key={index} book={book} bookIndex={index} />
      ))}
    </div>
  )
};

export default BookGrid;