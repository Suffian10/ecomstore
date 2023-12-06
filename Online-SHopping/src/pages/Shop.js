import React from 'react'
import Sidebar from '../Dropmenu/Sidebar'
import Products from '../Products/Products'


export default function Shop({handleChange,result}) {
    return (
        <div>
            <Sidebar handleChange={handleChange} />
            <Products result={result} />
        </div>
    )
}
