const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="flex justify-between items-center p-4 bg-white border-b border-gray-300 rounded shadow-md hover:bg-gray-50 transition duration-200"
      onClick={() => onSelect(name)}
    >
      <span className="font-semibold text-teal-600">{name}</span>
      <span className="text-gray-600">Qty: {quantity}</span>
      <span className="text-sm text-gray-500">Category: {category}</span>
    </li>
  );
};

export default Item;
