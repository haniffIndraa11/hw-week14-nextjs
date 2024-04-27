import { useEffect, useState } from "react";

const BookForm = ({ bookData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!selectedImage) {
      alert("please select an image");
    }
    const formData = new FormData(event.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages")),
          formData.get("synopsis")
        );
        alert("edit successfully");
      } catch (error) {
        alert("Error");
      }
      return;
    }
    try {
      await createBook(formData);
      event.target.reset();
      alert("Book created successfully");
      setSelectedImage("");
    } catch (error) {
      alert("Error");
    }
  }

  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center mt-44 h-80 gap-2 my-2 relative">
        <div className=" p-10 bg-color-accent w-96 rounded shadow-xl mt-40">
          <p className="p-2 my-2">Title</p>
          <input
            placeholder="Judul Buku"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.title}
          ></input>
          <p className="p-2 my-2">Author</p>
          <input
            placeholder="Author"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.author}
          ></input>
          <p className="p-2 my-2">Publisher</p>
          <input
            placeholder="Publisher"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.publisher}
          ></input>
          <p className="p-2 my-2">Page</p>
          <input
            placeholder="Jumlah Halaman"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.pages}
          ></input>
          <p className="p-2 my-2">Year</p>
          <input
            placeholder="Tahun Pembuatan"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.year}
          ></input>

          <p className="p-2 my-2">Synopsis</p>
          <textarea
            placeholder="Masukan Sinopsis"
            className="p-2 bg-color-primary w-full rounded"
            defaultValue={bookData?.synopsis}
          ></textarea>
          <p className="p-2 my-2">Image</p> 
          {!bookData?.image && (
            <div>
              <label>Image</label>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setSelectedImage(URL.createObjectURL(file));
                }}
              />
            </div>
          )}
          <br />
          <button className="p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
            {bookData ? "Edit Book" : "Create Book"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
