import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";

import "../styles/style.css";

const ShoppingCart = (props) => {
    const [cost, setCost] = useState(0);

    useEffect(() => {
        const countCost = (cart) => {
            let sum = 0;
            cart.forEach((cartItem) => {
                let q = cartItem[1];
                let price = cartItem[0].price;
                sum += price * q;
            });

            setCost(sum);
        };
        countCost(props.cart);
    }, [props.cart]);

    return (
        <>
            {!props.cart.length && (
                <h1 className='text-light'>Your cart is empty.</h1>
            )}
            <div className='cards'>
                {props.cart.map((cartItem, index) => {
                    return (
                        <div className='card' key={index}>
                            <h2>{cartItem[0].title}</h2>
                            <img src={cartItem[0].image} alt='...' />
                            <h2> {cartItem[0].price}$</h2>
                            <p>quantity: {cartItem[1]}</p>
                        </div>
                    );
                })}
            </div>
            {props.cart.length && (
                <Navbar fixed='bottom' className='cart-bottom-nav'>
                    <h3>Subtotal: {cost.toFixed(2)}$</h3>
                </Navbar>
            )}
        </>
    );
};

export default ShoppingCart;
