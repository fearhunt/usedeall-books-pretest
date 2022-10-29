import React from "react";

import BookCard from "./Card";

const BookGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[...Array(6)].map((_: any, index: number) => (
        <BookCard key={index} />
      ))}
    </div>
  )
};

export default BookGrid;