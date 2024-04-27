import Image from "next/image";
import Link from "next/link";

const Books = ({ api }) => {
  return (
    <div className="border border-color-primary grid gap-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 py-2">
      {api.books?.map((book) => {
        return (
          <>
            <div className="text-color-primary">
              <Link href={`/book/${book.id}`} key={book.id}>
                <Image
                  src={"https://placehold.co/600x400/png"}
                  alt="image"
                  width={300}
                  height={350}
                ></Image>
                <h3>Judul Buku: {book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Tahun: {book.year}</p>
                <p>Jumlah Halaman: {book.pages}</p>
                <p>Sinopsis: {book.synopsis}</p>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Books;
