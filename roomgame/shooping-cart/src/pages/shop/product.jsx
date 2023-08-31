import React from 'react'

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data
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
    </div>
   </div>
  )
}
