import { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = items.reduce((group, item) => {
    const { category } = item;
    group[category] = group[category] || [];
    group[category].push(item);
    return group;
  }, {});

  return (
    <div>
      <h2>Sort By:</h2>
      <button
        onClick={() => setSortBy('name')}
        style={{ backgroundColor: sortBy === 'name' ? 'lightgray' : 'white' }}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        style={{ backgroundColor: sortBy === 'category' ? 'lightgray' : 'white' }}
      >
        Category
      </button>
      <button
        onClick={() => setSortBy('group')}
        style={{ backgroundColor: sortBy === 'group' ? 'lightgray' : 'white' }}
      >
        Group by Category
      </button>

      <ul className="divide-y divide-gray-200">
        {sortBy === 'group'
          ? Object.keys(groupedItems).map(category => (
              <li key={category}>
                <strong>{category}</strong>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map(item => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
