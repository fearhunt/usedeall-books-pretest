import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

import axios from "axios";

import BookCard from "../components/Book/BookCard";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>UseDeall Books</title>
        <meta name="description" content="Book your favorite here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BookCard />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO Create type on index
  let books = [];

  const booksConfig = {
    params: {
      categoryId: context.query.categoryId ?? 1,
      page: context.query.page ?? 1,
      size: context.query.size ?? 10, 
    }
  }

  await axios.get("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books", booksConfig)
    .then((res) => {
      books = res.data;
    }).catch((err) => {
      console.error(err);
      // const statusCode = err.response.status\;
    });

  return {
    props: {
      books: books
    }
  }
}

export default Home;
