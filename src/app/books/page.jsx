"use client"

import { getAllBooks } from "@/modules/fetch";
import { useEffect, useState } from "react";
import Books from "@/components/Books";

const ViewAllBooks = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
      console.log(books)
    };
    fetchBooks();
  }, []);

  return (
    <Books api={books}/>
  );
};

export default ViewAllBooks;
