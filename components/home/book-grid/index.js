import { useState } from "react";
import BookItem from "./book-item";
import { books } from "./books";

export default function BookGrid() {
  const [mostLikedBook, setMostLikedBook] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const handleLike = (details) => {
    if (details.likes > numberOfLikes) {
      let newValue = details.likes;
      setNumberOfLikes(newValue);
      setMostLikedBook(details.title);
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
        The most liked book is: {mostLikedBook}
      </div>
    </div>
  );
}
