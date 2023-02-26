import { useState } from "react";
import books from "./books";

export default function BookItem({ title, author, onLike }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleIncrementLike = () => {
    let newValue = likes + 1;
    let details = {
      title: title,
      likes: newValue,
    };
    onLike(details);
    setLikes(newValue);
  };

  const handleDecrementLike = () => {
    setDislikes(dislikes + 1);
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
          <p className="text-blue-500 text-center font-medium mt-10">
            {dislikes} dislikes
          </p>
          <div className="flex flex-row justify-center w-full">
            <button
              className="bg-blue-500 py-1 px-3 rounded-lg text-white"
              onClick={handleDecrementLike}
            >
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
