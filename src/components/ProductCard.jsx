// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-purple-500 text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-purple-500 font-semibold mb-4">${product.price}</p>
      <h1>kamruzzaman</h1>
      <Link to={`/product/${product.product_id}`} className="text-white bg-purple-500 px-4 py-2 rounded text-center block">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

