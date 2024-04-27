"use client"

import { getBookDetailById } from "@/modules/fetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BookDetail = ({params: {id}}) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      const response = await deleteBook(id);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 py-2">
      <div className="text-color-primary border m-auto">
        <Image
          src={"https://placehold.co/600x400/png"}
          alt="image"
          width={800}
          height={600}
        ></Image>
      </div>
      <div className="text-color-primary border m-auto">
        <h3>Judul Buku: {book?.title} </h3>
        <p>Author: {book?.author}</p>
        <p>Publisher: {book?.publisher}</p>
        <p>Tahun: {book?.year}</p>
        <p>Jumlah Halaman: {book?.pages}</p>
        <p>Sinopsis: {book?.synopsis}</p>
        <div className="flex justify-around">
          <button className=" rounded p-2 bg-color-accent text-color-dark hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
            Delete
          </button>
          <Link href={`/editbook/${id}`}>
            <button className="w-20 rounded p-2 bg-color-accent text-color-dark hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
