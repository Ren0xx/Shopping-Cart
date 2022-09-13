import React from "react";

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
                            <Form.Control
                                size='sm'
                                name='price'
                                placeholder='Enter Amount of Items'
                                type='number'
                                min='0'
                                defaultValue={item.quantity}
                            />
                            <Form.Text muted>
                                Choose how many items you want to buy.
                            </Form.Text>
                        </Form>
                        <Button size='sm'>Add to Cart</Button>
                    </div>
                );
            })}
        </div>
    );
};

export default ShopItems;
