"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="p-2 m-4 bg-white text-black w-36">
      <label className="text-gray-700">Quantity:</label>
      <div className="flex justify-between">
        <span>{quantity}</span>
        <div className="flex">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>
          <button
            type="button"
            aria-label="Increase quantity"
            className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
            onClick={increment}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
