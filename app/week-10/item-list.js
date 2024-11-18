import { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name)); // Sorting alphabetically by name

  return (
    <ul className="divide-y divide-gray-200">
      {sortedItems.map(item => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item.name)}
        />
      ))}
    </ul>
  );
};

export default ItemList;
