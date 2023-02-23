import { useState } from "react";
import books from "./books";

export default function BookItem({ title, author }) {
  const [likes, setLikes] = useState(0);

  const handleIncrementLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <div>
        <div className="bg-green-100 p-4">
          <p className="title mb-4 text-center text-xl font-medium">{title}</p>
          <p className="author text-sm text-gray-700 text-center">{author}</p>
          <p className="text-center text-red-500 font-medium">{likes} likes</p>
          <div className="flex flex-row justify-center w-full">
            <button
              className="bg-red-700 text-white px-3 py-1 rounded-lg"
              onClick={handleIncrementLike}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
