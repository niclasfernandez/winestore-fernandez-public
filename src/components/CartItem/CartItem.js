import './CartItem.css';
import React from "react";

export default function CartItem({product}) {

    return(
        <div className='productContainer'>
            <h3>{product.title}</h3>
            <h3>{product.itemCount}</h3>
            <h3>{product.price}</h3>
            <h3>{product.itemCount * product.price}</h3>
        </div>
    )
}