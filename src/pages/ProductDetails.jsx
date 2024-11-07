import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext, WishlistContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);
  const [product, setProduct] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../data/product.json')
      .then((response) => response.json())
      .then((data) => {
        const productData = data.find((item) => item.product_id === parseInt(id));

        if (productData) {
          setProduct(productData);
          setIsInWishlist(wishlistItems.some((item) => item.product_id === productData.product_id));
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = Array(fullStars).fill('⭐');
    return stars.map((star, index) => <span key={index} className="text-yellow-400">{star}</span>);
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found. kamruzzaman tututl</div>;
  }

  return (
    <div className="relative mb-40">
      <Helmet>
        <title>{`Gadget Heaven | ${product.product_title}`}</title>
      </Helmet>
      <div className='bg-purple-600  text-center text-white pt-6'>
        <h1 className='text-3xl font-extrabold mb-2'>Product Details</h1>
        <p className='max-w-[550px] text-[12px] m-auto pb-40'>Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!</p>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg
       p-4 max-w-[580px] m-auto absolute left-1/2 transform -translate-x-1/2 -mt-32">
        <div className="h-60 w-full md:w-1/3 border-2 border-solid rounded-lg">
          <img
            src={product.product_image}
            alt={product.product_title}
            className=" h-full w-full rounded-md "
          />
        </div>
        <div className="w-[400px] md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h1 className="text-[16px] font-extrabold text-purple-700">{product.product_title}</h1>
          <p className="text-[12px] text-gray-700 font-bold ">${product.price}</p>
          <span
            className={`inline-block px-2 py-[2px] rounded-full text-[10px] font-semibold ${product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
          >
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </span>
          <p className="mt-1 text-[10px] text-gray-600">{product.description}</p>

          <div className="mt-1">
            <h2 className="text-sm font-bold">Specification:</h2>
            <ul className="list-disc ml-6 mt-1 text-[10px]">
              {product.Specification.map((spec, index) => (
                <li key={index} className="text-gray-600">{spec}</li>
              ))}
            </ul>
          </div>

          <div className="mt-1 flex items-center">
            <span className="text-[12px] font-bold">Rating:</span>
            <div className="text-[12px] flex items-center ml-2">
              {renderStars(product.rating)}
              <span className="ml-2">{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="mt-1 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-purple-500 text-white font-semibold text-[12px] px-4  rounded-full hover:bg-purple-600"
            >
              <div className='flex items-center gap-1'>
                <h1>Add to Cart</h1>
                <MdOutlineShoppingCart size={16} />
              </div>
               
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`font-semibold p-[5px] text-[12px] rounded-full border  ${isInWishlist ? 'text-gray-400 border-gray-400' : 'text-purple-500 border-purple-500'
                }`}
              disabled={isInWishlist}
            >
              {isInWishlist ? (
                <>
                  <GiSelfLove size={16} />
                </>
              ) : (
                <>
                  <GiSelfLove size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
