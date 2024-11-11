import { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  // Existing code remains unchanged
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
