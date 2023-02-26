import { useState } from "react";
import BookItem from "./book-item";
import { books } from "./books";

export default function BookGrid() {
  const [mostLikedBook, setMostLikedBook] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [lastLikedBook, setLastLikedBook] = useState("");

  const handleLike = (details) => {
    const { title, likes } = details;
    setLastLikedBook(title);
    if (likes > numberOfLikes) {
      let newValue = likes;
      setNumberOfLikes(newValue);
      setMostLikedBook(title);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="mt-20 grid grid-cols-3 bg-red-100 w-full">
        {books.map((book) => {
          return (
            <BookItem
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
