import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data
    const {addCart,cartItems} = useContext(ShopContext)
    const cartAmount  = cartItems[id]
  return (

   <div className="product">
    <div className="description">
        <img src={productImage} alt="" />
        <p>
            <b>{productName}</b>
        </p>
        <p>
            <b>${price}</b>
        </p>
        <button className='addToCartButton' onClick={ () => addCart(id)}>Add Cart{cartAmount > 0 && <> ({cartAmount})</>}</button>
    </div>
   </div>
  )
}
