// Cart.js
import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    } else {
      // If the quantity is 1, remove the item from the cart
      removeFromCart(index);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span>
              {item.name} - ${item.price} - Quantity: {item.quantity}
            </span>
            <div>
              <button className="quantity-button" onClick={() => decreaseQuantity(index)}>
                -
              </button>
              <button className="quantity-button" onClick={() => increaseQuantity(index)}>
                +
              </button>
              <button className="remove-button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      <button className="clear-button" onClick={() => setCartItems([])}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
