import React,{createContext, useState} from 'react'
import { PRODUCTS } from '../product';
export const ShopContext = createContext(null)
const getDefaultCart = () =>{
  let cart ={}
  for (let index = 0; index < PRODUCTS.length +1; index++) {
    cart[index] = 0
    
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems,setCartItems] = useState(getDefaultCart())
  const addCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
  }
  const removeCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
  }
  const contextValue = {cartItems,addCart,removeCart}
  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}