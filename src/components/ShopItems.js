import React, { useState } from "react";

import "../styles/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ShopItems = (props) => {
    return (
        <div className='cards'>
            {props.items.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <h5>{item.name}</h5>
                        <img src={item.img} alt='...' />
                        <h5>{item.price}</h5>

                        <Form>
                            <Form.Group>
                                <Form.Control
                                    size='sm'
                                    name={item.name}
                                    placeholder='Enter Amount of Items'
                                    type='number'
                                    min='0'
                                    quantity={item.quantity}
                                    defaultValue='0'
                                    onChange={(e) => {
                                        item.quantity = e.target.value;
                                    }}
                                />
                                <Form.Text muted>
                                    Choose how many items you want to buy.
                                </Form.Text>
                            </Form.Group>
                            <Button
                                value={item.quantity}
                                onClick={() => props.addToCart(item, item.quantity)}
                                size='sm'>
                                Add to Cart
                            </Button>
                        </Form>
                    </div>
                );
            })}
        </div>
    );
};

export default ShopItems;
