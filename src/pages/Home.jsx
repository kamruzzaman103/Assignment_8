
import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoriesSidebar from '../components/CategoriesSidebar';
import ProductCard from '../components/ProductCard';
import productData from '../data/product.json';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  useEffect(() => {
    // Fetching data from product.json and setting initial products
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All Products') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="mx-[8px] sm:mx-10">
      <Helmet>
        <title>{`Gadget Heaven | Home`}</title>
      </Helmet>
      
      <Banner />
      <div className='text-center text-2xl font-bold mt-36'>Explore Cutting-Edge Gadgets</div>
      <div className="flex mt-6">
        <CategoriesSidebar 
          categories={['All Products', 'Laptops', 'Phones', 'Watches', 'Accessories', 'MacBook', 'Iphone']}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-grow ml-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-3xl font-semibold mt-28 ">
              No data found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
