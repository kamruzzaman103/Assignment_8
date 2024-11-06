import React from 'react';

const CategoriesSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-md">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      {categories.map((category) => (
        <button
          key={category}
          className={`block w-full text-sm font-bold px-3 py-2 rounded-full text-left mb-2 ${
            selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-white text-gray-800'
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesSidebar;
