import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-purple-500 text-white p-8 text-center rounded-md">
      <h1 className="text-3xl font-bold mb-4">Upgrade Your Tech with Gadget Heaven</h1>
      <p className="mb-6">Explore the latest gadgets that will take your experience to the next level!</p>
      <button 
        className="bg-white text-purple-500 font-semibold px-6 py-2 rounded"
        onClick={() => navigate('/dashboard')}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Banner;
