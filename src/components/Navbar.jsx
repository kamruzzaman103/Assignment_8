import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold mr-4">Gadget Heaven</Link>
        <NavLink to="/" exact className="mx-2" activeClassName="text-gray-300">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="mx-2" activeClassName="text-gray-300">
          Dashboard
        </NavLink>
        <NavLink to="/stats" className="mx-2" activeClassName="text-gray-300">
          Stats
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="relative mx-2">
          <FaShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">0</span>
        </div>
        <div className="relative mx-2">
          <FaHeart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
