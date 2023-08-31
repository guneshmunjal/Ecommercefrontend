import React, { useContext } from 'react'
import './cart.css'

import { PRODUCTS } from '../../Products';
import { CartItem } from './CartItem';
import { ShoppingContext } from '../../Context/Shopcontext';
export const Cart = () => {
  const { cartItems } = useContext(ShoppingContext);
  return (
    <div className='cart'>

    <div>
    <h1>your cart items</h1>
    </div>
    <div className='cartIems'>
      {PRODUCTS.map((product)=>{
        if(cartItems[product.id]!==0){
          return <CartItem data = {product}/>
        }
      })}
    </div>
   
    </div>
  )
}
