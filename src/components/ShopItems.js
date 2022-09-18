import React, { useState } from "react";
import "../styles/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ShopItems = (props) => {
    const updateState = (value, item) => {
        if (value <= 0) return;
        const newState = quantities.map((q, ind) => {
          if (item.id === ind + 1) {
            return {...q, quantity: value};
          }
          return q;
        });

        setQuantities(newState);
      };

    const [quantities, setQuantities] = useState(Array(16).fill({quantity: 0}));
    return (
        <div className='cards'>
            {props.items.map((item, index) => {
                return (
                    <div key={item.id} className='card'>
                        <h5>{item.title}</h5>
                        <img src={item.image} alt='...' />
                        <h5>{item.price.toFixed(2)}$</h5>

                        <Form>
                            <Form.Group>
                                <Form.Control
                                    size='sm'
                                    placeholder='Enter Amount of Items'
                                    type='number'
                                    min='0'
                                    onChange={(e) => {updateState(e.target.value, item);}}
                                />
                                <Form.Text muted>
                                    Choose how many items you want to buy.
                                </Form.Text>
                            </Form.Group>
                            <Button
                                value={quantities[index].quantity}
                                onClick={(e) => {
                                    props.addToCart(item, e.target.value);
                                }}
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
