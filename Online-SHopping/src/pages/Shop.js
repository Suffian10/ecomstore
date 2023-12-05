import React from 'react'
import Sidebar from '../Dropmenu/Sidebar'
import Products from '../Products/Products'
import Recommended from '../Recommended/Recommended'


export default function Shop({handleClick,query,handleChange,handleInputChange,result}) {
    return (
        <div>
            <Sidebar handleChange={handleChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
        </div>
    )
}
