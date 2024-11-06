import React, { useContext, useState } from 'react';
import { CartContext, WishlistContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const [isCartTab, setIsCartTab] = useState(true);
  const [sorted, setSorted] = useState(false);
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
    toast.success('Congratulations on your purchase!');
    clearCart();
    setTimeout(() => navigate('/'), 2000); // Redirect to Home page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2">Explore the latest gadgets that will take your experience to the next level.</p>
      </header>
      
      <div className="container mx-auto py-6">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-2 font-semibold rounded-full ${isCartTab ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsCartTab(true)}
          >
            Cart
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-full ${!isCartTab ? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsCartTab(false)}
          >
            Wishlist
          </button>
        </div>

        {isCartTab ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              <span className="text-xl font-semibold">Total cost: ${totalCost.toFixed(2)}</span>
              <div className="flex space-x-2">
                <button
                  onClick={handleSortByPrice}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurchase}
                  className={`bg-purple-700 text-white px-4 py-2 rounded ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
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
                  <div key={item.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-gray-800 font-semibold mt-1">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-2xl font-bold ml-4"
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
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            {wishlistItems.length === 0 ? (
              <p className="text-center text-gray-500">Your wishlist is empty.</p>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-gray-800 font-semibold mt-1">Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-700 text-2xl font-bold ml-4"
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
      
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">Gadget Heaven - Leading the way in cutting-edge technology and innovation.</p>
      </footer>
    </div>
  );
};

export default Dashboard;

