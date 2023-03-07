import { useEffect, useState } from "react";
import BookItem from "./book-item";

export default function BookGrid() {
  const [mostLikedBook, setMostLikedBook] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [lastLikedBook, setLastLikedBook] = useState("");
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await fetch("/api/books");
    const response = await data.json();
    setBooks(response);
  };

  const handleLike = (details) => {
    const { title, likes } = details;
    setLastLikedBook(title);
    if (likes > numberOfLikes) {
      setNumberOfLikes(likes);
      setMostLikedBook(title);
    }
  };

  const handleTitle = (e) => {
    let title = e.target.value;
    setTitle(title);
  };

  const handleAuthor = (e) => {
    let author = e.target.value;
    setAuthor(author);
  };

  const addBook = () => {
    let book = {
      title: title,
      author: author,
    };

    let newBooks = [];
    for (let i = 0; i < books.length; i++) {
      newBooks.push(books[i]);
    }
    newBooks.push(book);
    // let newBooks = [...books, book]; that replaces lines 26-30
    setBooks(newBooks);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full my-5">
        <form action="" className="flex flex-row gap-x-3 mb-5 ml-5">
          <input
            placeholder="title"
            type="text"
            className="title hover:bg-gray-200 py-1 px-3 text-center rounded-lg border border-gray-400"
            value={title}
            onChange={handleTitle}
          />
          <input
            placeholder="author"
            type="text"
            className="author hover:bg-gray-200 py-1 px-3 text-center rounded-lg border border-gray-400"
            value={author}
            onChange={handleAuthor}
          />
          <button
            className="bg-blue-500 py-1 px-3 text-white rounded-lg"
            onClick={addBook}
            type="button"
          >
            Add Book
          </button>
        </form>
      </div>
      <div className="mt-20 grid grid-cols-3 bg-red-100 w-full">
        {books.map((book, index) => {
          return (
            <BookItem
              key={index}
              title={book.title}
              author={book.author}
              onLike={handleLike}
            ></BookItem>
          );
        })}
      </div>
      <div className="w-full my-10">
        The last liked book is: {lastLikedBook}
      </div>
      <div className="w-full my-5">The most liked book is: {mostLikedBook}</div>
    </div>
  );
}
