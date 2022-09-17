import React from "react";

import "../styles/style.css"

const ShoppingCart = (props) => {
    return (
        <div className="cart-item">
            {props.cart.map((cartItem, index) => {
                return (
                    <div key={index}>
                        <h2>name: {cartItem.name}</h2>
                        <h2> {cartItem.price}$</h2>

                    </div>
                );
            })}
        </div>
    );
};

export default ShoppingCart;
