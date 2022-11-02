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
  bookmarks?: any; 
  handleBookmark: (book: Book) => void;
  handleUnbookmark: (title: string) => void;
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
  const [isOpenBookModal, setIsOpenBookModal] = useState(false);
  const [isBookmarkedContent, setIsBookmarkedContent] = useState(false);
  const [modalContent, setModalContent] = useState(defaultBook);

  const handleOpenModal = (content: any) => {
    setIsBookmarkedContent(props.bookmarks.some((book: Book) => book.title === content.title));
    setModalContent(content);

    setIsOpenBookModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenBookModal(false);

    setTimeout(() => {
      setModalContent(defaultBook); // Prevent content to blank before modal closed
      setIsBookmarkedContent(false);
    }, 300);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-2">
      {props.books.map((book: any, index: number) => (
        <BookCard 
          key={index} 
          book={book} 
          bookIndex={index}
          handleOpenModal={(content: Book) => handleOpenModal(content)} 
        />
      ))}

      <BookModal 
        isOpen={isOpenBookModal} 
        content={modalContent} 
        isBookmarkedContent={isBookmarkedContent} 
        handleCloseModal={() => handleCloseModal()} 
        handleBookmark={(book: Book) => props.handleBookmark(book)} 
        handleUnbookmark={(title: string) => props.handleUnbookmark(title)} 
      />
    </div>
  )
};

export default BookGrid;