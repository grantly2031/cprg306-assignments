"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName.replace(/[^a-zA-Z\s]/g, '').split(',')[0].trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg flex">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 pl-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
