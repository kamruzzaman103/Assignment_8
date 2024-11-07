import React from 'react';
import a from '../assets/picture/banner.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-purple-600 text-white p-8 text-center rounded-b-2xl mt-0 mb-44">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mx-44">Upgrade Your Tech with Gadget Heaven</h1>
      <p className="mb-6 text-sm sm:mx-48">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button
        className="bg-white text-purple-500 font-semibold px-6 py-2 rounded-full mb-16 sm:mb-36"
        onClick={() => navigate('/dashboard')}
      >
        Shop Now
      </button>

      {/* Image positioned to overlap */}
      <div className='w-[300px] sm:w-auto  absolute left-1/2 rounded-xl border-2 border-white
         transform -translate-x-1/2 sm:-mt-28 -mt-12'>
      <img
        className="rounded-2xl p-2 w-[550px] sm:w-[500px] sm:h-72 backdrop-blur-sm"src={a} alt=""/>
      </div>
      
    </div>


  );
};

export default Banner;
