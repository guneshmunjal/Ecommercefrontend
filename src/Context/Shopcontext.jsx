import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';


export const ShoppingContext = createContext(null);

const getDefaultCart = () =>{// the default amount of any items i set 0 
    let cart = {};
    for(let i=1; i <PRODUCTS.length +1 ;i++){
        cart[i] = 0
    }
    return cart
}

export const Shopcontext = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
      
    const removeFromCar = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // the above functions represent that if need to add something in the card
    // then it will add the new item along with the item added recently.
    // and all the items will be shown in the cart and incase of removal
    // we will remove that particular item
const contextValue = {cartItems,addToCart,removeFromCar}

  return (
    <ShoppingContext.Provider value = {contextValue}>
        {props.children}
    </ShoppingContext.Provider>
  )
}
