const NewBookPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-44 h-80 gap-2 my-2 relative">
      <div className=" p-10 bg-color-accent w-96 rounded shadow-xl mt-40">
        <p className="p-2 my-2">Title</p>
        <input
          placeholder="Judul Buku"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Author</p>
        <input
          placeholder="Author"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Publisher</p>
        <input
          placeholder="Publisher"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Page</p>
        <input
          placeholder="Jumlah Halaman"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Year</p>
        <input
          placeholder="Tahun Pembuatan"
          className="p-2 bg-color-primary w-full rounded"
        ></input>

        <p className="p-2 my-2">Synopsis</p>
        <textarea
          placeholder="Masukan Sinopsis"
          className="p-2 bg-color-primary w-full rounded"
        ></textarea>
        <p className="p-2 my-2">Image</p>
        <input
          placeholder="Image"
          type="image"
          className="p-2 bg-color-primary w-full rounded"
        ></input>

        <br />
        <button className="p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
          Create
        </button>
      </div>
    </div>
  );
};

export default NewBookPage;
