import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to Gadget Heaven! We are dedicated to providing you with the latest and most innovative gadgets in the market.
          From smartphones to laptops, and everything in between, we ensure that you have access to the best technology to meet your needs.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Our mission is to offer exceptional quality, convenience, and value. Whether you're looking to upgrade your device or
          find the perfect accessory, we have it all. Thank you for choosing Gadget Heaven as your trusted source for tech products.
        </p>
      </div>
    </div>
  );
};

export default About;
