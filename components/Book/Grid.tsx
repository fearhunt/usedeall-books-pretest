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
  const defaultBook = {
    id: 0,
    title: "",
    category_id: 0,
    authors: [],
    cover_url: "",
    description: "",
    sections: [],
    audio_length: 0
  }

  // TODO Move to context
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(defaultBook);

  const handleOpenModal = (content: any) => {
    setIsOpen(true);
    setModalContent(content);
    console.log(content)
  };

  const handleCloseModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setModalContent(defaultBook); // Prevent content to blank before modal closed
    }, 300);
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