import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";



const Navbar = () => {
  const location = useLocation();

  // Determine background color based on the current route
  const isHome = location.pathname === '/';
  const navbarBackgroundColor = isHome ? 'bg-purple-600' : 'bg-white';
  const textColor = isHome ? 'text-white' : 'text-gray-800';

  return (
    <nav className={`${navbarBackgroundColor} ${textColor} p-4 flex justify-between items-center mx-[8px] sm:mx-[40px]`}>
      <Link to="/" className="text-xl font-bold mr-4">Gadget Heaven</Link>
      <div className="hidden lg:flex items-center">
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
        
          <MdOutlineShoppingCart size={24}/>

          <span className="absolute -top-2 -right-2  text-red-700 font-bold rounded-full px-2 text-[14px]">0</span>
        </div>

        <div className="relative mx-2">
        <GiSelfLove size={24} />
          <span className="absolute -top-2 -right-2  text-red-700 font-bold rounded-full px-2 text-[14px]">0</span>
        </div>
      </div>
      <div className="dropdown lg:hidden">
        <div tabIndex="0" role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-2 -ml-12 w-30 p-2 shadow"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mx-2 ${isActive ? 'underline text-gray-300' : 'text-inherit'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li><NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
            }
          >
            Dashboard
          </NavLink></li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
              }
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mx-2 ${isActive ? 'underline text-purple-600' : 'text-inherit'}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
