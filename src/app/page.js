import Link from "next/link";

export default function Home() {
  return (
    <div className="text-color-primary">
      <h1>Home Page</h1>
      <Link href="/books">
        <p>View Books</p>
      </Link>
      <Link href="/register">
        <p>Register</p>
      </Link>
      <Link href="/booksDetail">
        <p>Books Detail</p>
      </Link>
      <Link href="/newBooks">
        <p>Create New Book</p>
      </Link>
    </div>
  );
}
