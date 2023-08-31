import React from 'react'
import { PRODUCTS } from "../../Products" // Adjust the alias path

import { Products } from './Products'
import "./shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>all in store</h1>
        </div>
        <div className='products'>
          {PRODUCTS.map((product)=>(
            <Products data = {product}/>
          ))}
        </div>
    </div>
  )
}
