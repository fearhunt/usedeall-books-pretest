import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import axios from "axios";

import BookSearch from "../components/Book/Search";
import BookGrid from "../components/Book/Grid";
import CategoryList from "../components/Category/List";
import PaginationButton from "../components/Pagination/Button";

type HomeProps = {
  categories: {
    id: number;
    name: string;
  }[];
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

const Home: NextPage<HomeProps> = ({ categories, books }) => {
  console.log(categories)
  console.log(books)
  return (
    <>
      <Head>
        <title>UseDeall Books</title>
        <meta name="description" content="Book your favorite here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container py-8">
          <BookSearch />
          <CategoryList />
          <BookGrid />
          <PaginationButton />
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
      page: context.query.page ?? 1,
      size: context.query.size ?? 10, 
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
