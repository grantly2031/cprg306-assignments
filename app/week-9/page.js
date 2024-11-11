"use client";

import { useState } from 'react';
import { useUserAuth } from './_utils/auth-context'; // 匯入 AuthContext
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // 使用 AuthContext

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName.replace(/[^a-zA-Z\s]/g, '').split(',')[0].trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        {!user ? (
          <button onClick={gitHubSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
            Log in with GitHub
          </button>
        ) : (
          <>
            <p className="text-lg">Welcome, {user.displayName} ({user.email})</p>
            <button onClick={firebaseSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
              Log out
            </button>
          </>
        )}
      </div>

      {user && (
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-1/2 pl-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
