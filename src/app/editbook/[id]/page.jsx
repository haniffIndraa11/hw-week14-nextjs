"use client";

import BookForm from "@/components/BookForm";
import { getBookDetailById } from "@/modules/fetch";
import { useEffect, useState } from "react";

const EditBook = ({params: {id}}) => {
  
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);


  return (
   <BookForm bookData={book}/>
  );
};

export default EditBook;

{/* <form onSubmit={handleEditBook}>
<div className="flex flex-row justify-around items-center mt-44 h-80 gap-2">
  <div className="text-color-primary border">
    <Image
      src="https://placehold.co/600x400/png"
      alt="image"
      width={300}
      height={250}
    />
  </div>
  <div className="p-10 bg-color-accent w-96 rounded shadow-xl mt-20">
    <p className="p-2 my-2">Title</p>
    <input
      placeholder="Judul Buku"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.title}
      onChange={(e) => setValues({ ...values, title: e.target.value })}
    />
    <p className="p-2 my-2">Author</p>
    <input
      placeholder="Author"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.author}
      onChange={(e) => setValues({ ...values, author: e.target.value })}
    />
    <p className="p-2 my-2">Publisher</p>
    <input
      placeholder="Publisher"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.publisher}
      onChange={(e) => setValues({ ...values, publisher: e.target.value })}
    />
    <p className="p-2 my-2">Pages</p>
    <input
      placeholder="Jumlah Halaman"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.pages}
      onChange={(e) => setValues({ ...values, pages: e.target.value })}
    />
    <p className="p-2 my-2">Year</p>
    <input
      placeholder="Tahun Pembuatan"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.year}
      onChange={(e) => setValues({ ...values, year: e.target.value })}
    />
    <p className="p-2 my-2">Synopsis</p>
    <textarea
      placeholder="Masukan Sinopsis"
      className="p-2 bg-color-primary w-full rounded"
      defaultValue={book?.synopsis}
      onChange={(e) => setValues({ ...values, synopsis: e.target.value })}
    />
    <br />
    <button className="p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
      Save
    </button>
  </div>
</div>
</form> */}