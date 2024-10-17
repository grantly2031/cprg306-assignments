import ItemList from './item-list';

const Page = () => {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
