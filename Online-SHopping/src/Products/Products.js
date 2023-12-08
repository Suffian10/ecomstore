import React, { useState, useEffect } from 'react';
import './Products.css';
import Card from '../components/Card';
import Cart from '../Cart/Cart'
export default function Products({ handleChange }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // Fetch product data from your backend
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCartHandler = (product) => {
    const existingProduct = cartItems.find((item) => item.product_id === product.product_id);

    if (existingProduct) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.product_id === product.product_id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = products.filter(product => {
    // Filter products based on the selected category
    if (selectedCategory === '' || product.category_id === selectedCategory) {
      return true;
    }
    return false;
  });

  return (
    <>
      <section className='card-container'>
        {filteredProducts.map(product => (
          <Card
          
            key={product.product_id}
            img={product.product_image_url}
            title={product.product_name}
            p_price={product.porduct_price}
            product={product}
         
          // Add other properties like star, reviews, newPrice, prevPrice as needed
          />
        ))}
      </section>
      <div>
    
      </div>
    </>
  );
}

