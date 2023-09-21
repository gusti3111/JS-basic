import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './cart.css'

const CartItem = (props) => {
  const {  id,productName, price, productImage } = props.data;
  const {cartItems,addCart,removeCart} = useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
            {""}
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <div className="countHandler">
        <button onClick={() => removeCart(id)}>-</button>
        <input value={cartItems[id]} />
        <button onClick={()=> addCart(id)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;