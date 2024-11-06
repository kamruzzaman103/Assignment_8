import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  // Determine background color based on the current route
  const isHome = location.pathname === '/';
  const navbarBackgroundColor = isHome ? 'bg-purple-600' : 'bg-white';
  const textColor = isHome ? 'text-white' : 'text-gray-800';

  return (
    <nav className={`${navbarBackgroundColor} ${textColor} p-4 flex justify-between items-center mx-[88px]`}>
      <Link to="/" className="text-xl font-bold mr-4">Gadget Heaven</Link>
      <div className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-2 ${isActive ? 'underline text-gray-300' : 'text-inherit'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
          }
        >
          Stats
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
          }
        >
          About
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
