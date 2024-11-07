import React, { useContext, useState } from 'react';
import { CartContext, WishlistContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowDownWideShort } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import b from '../assets/picture/Group.png';


const Dashboard = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const [isCartTab, setIsCartTab] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [finalTotalCost, setFinalTotalCost] = useState(0); // New state to store final total cost
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSortByPrice = () => {
    cartItems.sort((a, b) => (sorted ? a.price - b.price : b.price - a.price));
    setSorted(!sorted);
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is empty!');
      return;
    }
    setFinalTotalCost(totalCost); // Capture total cost before clearing the cart
    setShowPaymentSuccess(true);  // Show modal
    clearCart();                  // Clear cart after setting final total cost
  };

  const closeModal = () => {
    setShowPaymentSuccess(false);
    navigate('/'); // Redirect to Home page after closing modal
  };

  return (
    <div className=" bg-gray-50">
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      <header className="bg-purple-700 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 max-w-[500px] m-auto text-[12px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!.</p>
        <div className="flex justify-center space-x-4 my-2">
          <button
          className={`px-6 py-[3px] text-[14px] font-semibold border-[1px] border-white rounded-full ${isCartTab ? 'bg-white text-purple-700' : 'bg-purple-700'}`}
            onClick={() => setIsCartTab(true)}
          >
            Cart
          </button>
          <button
            className={`px-6 py-[3px] text-[14px] font-semibold border-[1px] border-white rounded-full ${!isCartTab ? 'bg-white text-purple-700' : 'bg-purple-700'}`}
            onClick={() => setIsCartTab(false)}
          >
            Wishlist
          </button>
        </div>
      </header>
      <div className="container mx-auto py-6">
        {isCartTab ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Cart</h2>
              <div className="flex space-x-2 items-center">
              <span className="text-sm font-semibold flex">Total : ${totalCost.toFixed(2)}</span>
                <button
                  onClick={handleSortByPrice}
                  className="bg-white text-gray-700 px-2 py-1  hover:bg-gray-300 rounded-full border-[1px] border-purple-700 "   
                >
                  <div className='flex items-center '>
                  <h1 className='mr-1 text-sm'>Sort by Price</h1> <FaArrowDownWideShort />
                  </div>
                </button>
                <button
                  onClick={handlePurchase}
                  className={`bg-purple-700 text-white px-2 py-[5px] text-sm rounded-full ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
                  disabled={cartItems.length === 0}
                >
                  Purchase
                </button>
              </div>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center bg-gray-100 p-2 rounded-lg shadow-sm">
                    <img src={item.product_image} alt={item.name} className="w-20 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold">{item.product_title}</h3>
                      <p className="text-gray-600 text-[10px]">{item.description}</p>
                      <p className="text-gray-800 text-[13px] font-semibold mt-1">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className="text-red-500 hover:text-red-800 text-sm px-[6px] border-[1px] border-red-500 hover:border-red-800 rounded-full font-bold ml-4"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Wishlist</h2>
            {wishlistItems.length === 0 ? (
              <p className="text-center text-gray-500">Your wishlist is empty.</p>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center bg-gray-100 p-2 rounded-lg shadow-sm">
                    <img src={item.product_image} alt={item.name} className="w-20 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-1">
                      <h3 className="text-sm font-bold">{item.product_title}</h3>
                      <p className="text-gray-600 text-[10px]">{item.description}</p>
                      <p className="text-[13px] text-gray-800 font-semibold mt-1 ">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.product_id)}
                      className="text-red-500 hover:text-red-800 text-sm px-[6px] border-[1px] border-red-500 hover:border-red-800 rounded-full font-bold ml-4"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Payment Success Modal */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl shadow-lg text-center max-w-sm w-full">
            <div className="text-4xl text-green-500 mb-4 w-20 mx-auto"><img src={b} alt="" /></div>
            <h2 className="text-xl font-bold">Payment Successfully</h2>
            <p className="mt-2 text-gray-500">Thanks for purchasing.</p>
            <p className="font-semibold mt-1 text-gray-500">Total: ${finalTotalCost.toFixed(2)}</p>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-black px-2 py-1 mt-6  hover:bg-purple-300 w-full rounded-full font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
