import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Link } from 'react-router-dom'
import a from "../store_images/wallpaperflare.com_wallpaper.jpg"
import './Home.css'
export default function Home() {
    return (
        <>
            <div className='main-div'>
                <div>
                    <img className='home-image' src={a} alt='chchc' />
                </div>
                <div className='second-div'>
                    <div className='second-div-content'>
                        <h1>Welcome to <span className='text-mart'>WebCart</span></h1>
                        <h4 className='slogon'>World's leading e-commerce WebCart</h4>
                    </div>
                </div>

            </div>

            {/* <div>
                <AboutSection />
            </div> */}




        </>
    )
}
