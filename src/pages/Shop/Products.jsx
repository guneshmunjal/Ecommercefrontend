import React, { useContext } from 'react'
import { ShoppingContext } from '../../Context/Shopcontext';

export const Products = (props) => {
    const {id,productImage,productName,price} = props.data;

    const {addToCart,cartItems} = useContext(ShoppingContext)
  
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt='imageproduct'/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>{addToCart(id)}}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
