import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = function () {
    let newValue = count + 1;
    setCount(newValue);
  };

  return (
    <div>
      <div>{count}</div>
      <button
        className="bg-blue-500 rounded-lg text-white py-1 px-3"
        onClick={() => increment()}
      >
        Click Here
      </button>
    </div>
  );
}
