import React from 'react'
// import { FaRegStar } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
export default function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className='card'>
      <img src={img} alt={title} className='card-image' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-review'>
          {star}{star}{star}{star}
          <span className='totaL-reviews'>{reviews}</span>
        </section>
        <section className='card-price'>
          <div className='price'>
            <del>{prevPrice}</del> <b>{newPrice}</b>
          </div>
          <div className='bag'>
            <IoBagAddOutline className='bag-icon' />
          </div>
        </section>
      </div>
    </section>
  )
}
