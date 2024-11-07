import React, { createContext, useState } from 'react';

export const CartContext = createContext();
export const WishlistContext = createContext();

export const AppProvider = ({ children }) => {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from cart by ID
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to wishlist
  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  // Remove item from wishlist by ID
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};
