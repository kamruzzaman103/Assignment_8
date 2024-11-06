import React from 'react';
import a from '../assets/picture/banner.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-purple-600 text-white p-8 text-center rounded-b-2xl mt-0 mb-44">
      <h1 className="text-3xl font-bold mb-4">Upgrade Your Tech with Gadget Heaven</h1>
      <p className="mb-6">Explore the latest gadgets that will take your experience to the next level!</p>
      <button
        className="bg-white text-purple-500 font-semibold px-6 py-2 rounded mb-32"
        onClick={() => navigate('/dashboard')}
      >
        Shop Now
      </button>

      {/* Image positioned to overlap */}
      <img
        className="absolute left-1/2 transform -translate-x-1/2 -mt-20 max-w-96"src={a} alt=""/>
    </div>


  );
};

export default Banner;
