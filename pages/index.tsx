import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import axios from "axios";

import Navbar from "../components/Navigation/Navbar";
import BookSearch from "../components/Book/Search";
import BookGrid from "../components/Book/Grid";
import CategoryList from "../components/Category/List";
import PaginationButton from "../components/Pagination/Button";

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

type HomeProps = {
  categories: {
    id: number;
    name: string;
  }[];
  books: Book[];
}

const Home: NextPage<HomeProps> = ({ categories, books }) => {
  const isInitialMount = useRef(true);

  // TODO Move to context
  const [keyword, setKeyword] = useState("");
  const [displayedBooks, setDisplayedBooks] = useState<any>([]);
  const [bookmarks, setBookmarks] = useState<any>([]);

  useEffect(() => {
    setBookmarks(JSON.parse(window.localStorage.getItem("bookmarks") ?? "[]"));
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Update localStorage on change bookmarks state
      window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const handleBookmark = (book: Book) => {
    setBookmarks([
      ...bookmarks,
      book
    ]);
  };

  const handleUnbookmark = (title: string) => {
    const filteredBookmarks = bookmarks.filter((book: Book) => book.title !== title);

    setBookmarks(filteredBookmarks);
  }

  const filterDisplayedBooksByNameAndAuthors = () => {
    const filteredBooks = books.filter((book: Book) => (
      (book.title).toLowerCase().includes(keyword.toLowerCase()) ||
      (book.authors).find((author: string) => author.toLowerCase().includes(keyword.toLowerCase()))
    ));

    setDisplayedBooks(filteredBooks);
  };

  useEffect(() => {
    filterDisplayedBooksByNameAndAuthors();
  }, [books, keyword]);

  return (
    <>
      <Head>
        <title>UseDeall Books</title>
        <meta name="description" content="Book your favorite here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="container py-8">
          <BookSearch handleChange={(event: any) => setKeyword(event.target.value)} />

          <CategoryList categories={categories} />

          {displayedBooks.length > 0 ? (
            <>
              <BookGrid 
                books={displayedBooks} 
                bookmarks={bookmarks} 
                handleBookmark={(book: Book) => handleBookmark(book)}
                handleUnbookmark={(title: string) => handleUnbookmark(title)}
              />

              <div className="mt-5 text-right space-x-2">
                <PaginationButton text="Previous" type="prev" />
                <PaginationButton text="Next" type="next" booksSize={displayedBooks.length} />
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl font-bold mt-4 bg-gradient-to-tr from-accent-red to-accent-orange bg-clip-text text-transparent">
                Oops!
              </p>
              <p className="text-sm text-gray-700">
                Currently there's no book that fit with keyword <span className="font-bold">{keyword}</span>. <br /> 
                But don't worry, we'll have new books soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoriesRes = await axios.get("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories");

  const booksConfig = {
    params: {
      categoryId: context.query.categoryId ?? 1,
      page: context.query.page ?? 0,
      size: context.query.size ?? 12, 
    }
  }

  const booksRes = await axios.get("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books", booksConfig);

  return {
    props: {
      categories: categoriesRes.data,
      books: booksRes.data
    }
  }
}

export default Home;
