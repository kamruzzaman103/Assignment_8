import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
      <p className="text-gray-600 text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
