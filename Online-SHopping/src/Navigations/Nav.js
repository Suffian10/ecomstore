import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { CiShop } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
export default function Nav({ handleInputChange, query }) {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
                <Link to={"/home"}>
                    <FaHome className='nav-icons' />
                </Link>
                <Link to={"/products"}>
                    <CiShop className='nav-icons' />
                </Link>
                <Link to={""}>
                    <AiOutlineShoppingCart className="nav-icons" />
                </Link>

                <Link to={"/"}>
                    <AiOutlineUserAdd className="nav-icons" />
                </Link>

            </div>
        </nav>
    )
}
