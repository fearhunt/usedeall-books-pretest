import React, { useState } from "react";

import BookCard from "./Card";
import BookModal from "./Modal";

type Book = {
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

type BookGridProps = {
  books: Book[];
}

const BookGrid = (props: BookGridProps) => {
  // TODO Move to context
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content: any) => {
    setIsOpen(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-2">
      {props.books.map((book: any, index: number) => (
        <BookCard key={index} handleOpenModal={(content: Book) => handleOpenModal(content)} book={book} bookIndex={index} />
      ))}

      <BookModal handleCloseModal={() => handleCloseModal()} isOpen={isOpen} content={modalContent} />
    </div>
  )
};

export default BookGrid;