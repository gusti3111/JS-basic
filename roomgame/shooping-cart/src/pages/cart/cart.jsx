import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../product";
import CartItem from "./cartItem";
import './cart.css'

export const Cart = () => {
  const {cartItems} = useContext(ShopContext)
  return(<div className="cart">
    <div>
      <h1>Your Cart</h1>
    </div>
    <div className="cartItems">
          {PRODUCTS.map((product) =>{
            if(cartItems[product.id] !== 0){
              return <CartItem data={product}/>

            } else {
              // Tambahkan tindakan atau pesan untuk kasus di mana cartItems[product.id] === 0
              return <div key={product.id}>Product {product.name} is not in the cart.</div>
            }

            
      

          })}
        



    </div>
  </div>  ) 
};