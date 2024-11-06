// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow">
      <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className=" text-sm font-bold mb-2">{product.product_title}</h3>
      <p className="text-gray-500 text-sm font-semibold mb-4"> Price: ${product.price}</p>

      
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
        <Link to={`/product/${product.product_id}`} >
          View Details
        </Link>
        </span>
      </button>
    </div>
  );
};

export default ProductCard;

