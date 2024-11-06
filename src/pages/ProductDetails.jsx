import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext, WishlistContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('../data/product.json')
      .then((response) => response.json())
      .then((data) => {
        const productData = data.find((item) => item.product_id === parseInt(id));
        
        if (productData) {
          setProduct(productData);
          setIsInWishlist(wishlistItems.some((item) => item.product_id === productData.product_id));
        } else {
          setProduct(null); // Optional, indicates not found
        }
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false); // Stop loading on error
      });
  }, [id, wishlistItems]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.product_title} added to cart!`);
    }
  };

  const handleAddToWishlist = () => {
    if (product && !isInWishlist) {
      addToWishlist(product);
      setIsInWishlist(true);
      toast.info(`${product.product_title} added to wishlist!`);
    }
  };

  // Loading or error state rendering
  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found. kamruzzaman tututl</div>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4">
        <div className="w-full md:w-1/3">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold text-purple-700">{product.product_title}</h1>
          <p className="text-xl text-gray-700 font-semibold mb-2">${product.price}</p>
          <span
            className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${
              product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </span>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Specification:</h2>
            <ul className="list-disc ml-6 mt-2">
              {product.Specification.map((spec, index) => (
                <li key={index} className="text-gray-600">{spec}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center">
            <span className="text-lg font-bold">Rating:</span>
            <div className="flex items-center ml-2">
              <span className="text-yellow-400 mr-1">⭐</span>
              <span>{product.rating}</span>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-purple-500 text-white font-semibold px-6 py-2 rounded hover:bg-purple-600"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`font-semibold px-6 py-2 rounded border ${
                isInWishlist ? 'text-gray-400 border-gray-400' : 'text-purple-500 border-purple-500'
              }`}
              disabled={isInWishlist}
            >
              {isInWishlist ? 'Added to Wishlist ♥' : 'Add to Wishlist ♥'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
