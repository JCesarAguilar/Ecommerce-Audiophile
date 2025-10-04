"use client";

import { useState } from "react";

export default function ProductCounter() {
  const MIN = 0;
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center bg-gray-soft gap-7 w-30 h-13">
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        disabled={count <= MIN}
        className="text-gray-medium hover:cursor-pointer hover:text-orange-strong"
      >
        -
      </button>
      {count}
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="text-gray-medium hover:cursor-pointer hover:text-orange-strong"
      >
        +
      </button>
    </div>
  );
}
