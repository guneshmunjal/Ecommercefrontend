import React,{useContext } from 'react'

export const CartItem = (props) => {
    const {id,productImage,price,productName} = props.data;
  
  return (
    <div className='cartItem'>
              <img src = {productImage} alt='helloimage'/>
              <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
              </div>
    </div>
  )
}
