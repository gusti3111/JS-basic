import React from "react";
import { PRODUCTS} from "../../product";
import { Product } from "./product";
import './shop.css'

export const Shop = () => {
  return(<div className="shop">
    <div className="Title">
        <h1>Toko Cabe Online</h1>
    </div>
    <div className="products">
      {""}
      {PRODUCTS.map((product) =>(
        <Product data={product}/>

      ))}
        
    </div>
  </div>) ;
};
