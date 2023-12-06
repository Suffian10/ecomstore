import React, { useState, useEffect } from 'react';
import './Products.css';
import Card from '../components/Card';

export default function Products({ handleChange }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch product data from your backend
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    handleChange(categoryId); // Notify parent component about the category change
  };

  const filteredProducts = products.filter(product => {
    // Filter products based on the selected category
    if (selectedCategory === '' || product.category_id === selectedCategory) {
      return true;
    }
    return false;
  });

  return (
    <section className='card-container'>
      {filteredProducts.map(product => (
        <Card
          key={product.product_id}
          img={product.product_image_url}
          title={product.product_name}
          p_price={product.product_price}
          // Add other properties like star, reviews, newPrice, prevPrice as needed
        />
      ))}
    </section>
  );
}
