"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: crypto.randomUUID(), // Improved unique ID generation
      name,
      quantity,
      category
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-white text-black w-96">
      <div className="mb-4">
        <label className="text-gray-700" htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
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

      <div className="mb-4">
        <label className="text-gray-700" htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Item
      </button>
    </form>
  );
}
