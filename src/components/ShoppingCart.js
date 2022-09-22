import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
                {props.cart.map((cartItem) => {
                    return (
                        <div className='card' >
                            <h2>{cartItem[0].title}</h2>
                            <img src={cartItem[0].image} alt='...' />
                            <h2> {cartItem[0].price.toFixed(2)}$</h2>
                            <ButtonGroup size="sm">
                                <Button
                                    variant='outline-danger'
                                    onClick={() => {
                                        if (!(cartItem[1] === 1)) {
                                            props.changeQuantity(
                                                cartItem,
                                                false
                                            );
                                        }
                                    }}>
                                    -
                                </Button>
                                <Button disabled variant="dark"> {cartItem[1]}</Button>
                                <Button
                                    variant='outline-success'
                                    onClick={() =>
                                        props.changeQuantity(cartItem, true)
                                    }>
                                    +
                                </Button>

                            </ButtonGroup>
                                <Button
                                    variant='outline-danger'
                                    onClick={() => props.remove(cartItem)}>
                                    Remove
                                </Button>
                        </div>
                    );
                })}
            </div>
            {props.cart.length && (
                <Navbar fixed='bottom' className='cart-bottom-nav'>
                    <h3>Subtotal: {cost.toFixed(2)}$</h3>
                    <Button>Checkout</Button>
                </Navbar>
            )}
        </>
    );
};

export default ShoppingCart;
