import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoriesSidebar from '../components/CategoriesSidebar';
import ProductCard from '../components/ProductCard';
import productData from '../data/product.json';

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
    <div className="p-6">
      <Banner />
      <div className="flex mt-6">
        <CategoriesSidebar 
          categories={['All Products', 'Laptops', 'Phones', 'Smart Watches']}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-grow ml-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
