import React from "react";

import BookCard from "./BookCard";

const BookGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[...Array(6)].map((i: number) => (
        <BookCard key={i} />
      ))}
    </div>
  )
};

export default BookGrid;