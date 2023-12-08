import React from 'react';
import { IoBagAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Card({ img, title, p_price, product,onCartPage }) {
  console.log("here the product in the card",product);
  return (
    <section className='card'>
      <img src={img} alt={title} className='card-image' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-price'>
          <div className='price'>
            <h3>Rs {p_price}</h3>
          </div>
          <div className='bag'>
            {onCartPage?(
<div></div>
            ):(
<Link to="/cart" state={{ product }}>
      <IoBagAddOutline className="bag-icon"  />
    </Link>
            )}
          
          </div>
        </section>
      </div>
    </section>
  );
}
