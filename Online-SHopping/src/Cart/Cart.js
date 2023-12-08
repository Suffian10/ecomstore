import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const location = useLocation();
  const product = location.state?.product;
  console.log("product inside Cart:", product);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const addToCart = () => {
    setCartItems([...cartItems, product]);
    // You can also update the order details or perform other actions here
  };

  const confirmOrder = async (product, userId) => {
    try {
      
      
        // or retrieve the user ID from your authentication system
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, userId ,quant}),
      };
      
      fetch('http://localhost:3001/cart', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Cart POST request successful:', data);
          navigate("/confirm");
        })
        .catch(error => {
          console.error('Error during Cart POST request:', error);
        });
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [quant,setQuant]=useState(1);
  

 
  return (
    <div className='w-full p-6 items-center flex-col justify-center flex '>
      <div className='text-3xl font-bold text-slate-800'>Your Cart</div>
      <Card
        key={product.product_id}
        img={product.product_image_url}
        title={product.product_name}
        p_price={product.porduct_price}
        product={product}
        onCartPage={true}
        // Add other properties like star, reviews, newPrice, prevPrice as needed
      />

      <div className='flex flex-row gap-x-12 '>
        <button
          onClick={() => confirmOrder(product, 1)}
          className='border-2 hover:border-none rounded-md px-6 p-3 border-green-700 hover:bg-slate-900 hover:text-white text-green-700'>
          Confirm order
        </button>
       <Link to={"/products"}>
       
        <button
          
          className='border-2 rounded-md px-6 p-3 hover:border-none border-red-700 hover:bg-slate-900 hover:text-white text-red-700'>
          Cancel
        </button>
        </Link>
        <button
           onClick={()=>setQuant(prev=>prev+1)}
          className='border-2 rounded-md px-6 p-3 hover:border-none border-slate-700 hover:bg-slate-900 hover:text-white text-slate-700'>
          +
        </button>
        <div
       
         className='border-2 rounded-md  p-3   border-slate-700   text-slate-700'>
         Quantity: {quant}</div>
      </div>
    </div>
  );
};

export default Cart;
