import React from 'react'
import "./AboutSection.css"
import watch from "../store_images/watch.png"
import cam from "../store_images/cam.png"
import shoe from "../store_images/shoe.png"
import computer from "../store_images/computer.png"

export default function AboutSection() {
    return (
        <section className='About-section'>
            <div className='About-content'>
                <h1>
                    Everything just a click away
                </h1>
                <p>
                Your ultimate destination for an unparalleled online shopping experience! At WebCart, we pride ourselves on offering a diverse array of products to cater to every need and desire. Whether you're searching for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our user-friendly platform ensures a seamless and enjoyable shopping journey. With an extensive selection of high-quality items and a commitment to customer satisfaction, WebCart is more than just a website – it's your go-to destination for all things extraordinary. Discover convenience, variety, and excellence with every click at WebCart, where your shopping wishes come to life!
                </p>

            </div>
            <div className='About-Img-Container'>
                <img 
                src={watch}
                className='aboutImg'
                />
                <img 
                src={cam}
                className='aboutImg'
                />
                <img 
                src={computer}
                className='aboutImg'
                />
                <img 
                src={shoe}
                className='aboutImg'
                />

            </div>
        </section>
    )
}
