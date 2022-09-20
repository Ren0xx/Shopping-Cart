import React, { useState } from "react";
import "../styles/style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ShopItems = (props) => {

    const [quantities, setQuantities] = useState(Array(16).fill({quantity: 0}));

    /**
     * If the value is less than or equal to zero, return. Otherwise, map through the quantities array
     * and return a new object with the quantity property set to the value passed in.
     * @param value - the value of the input field
     * @param item - {id: 1, name: "Item 1", price: 10}
     * @returns The newState is being returned.
     */
    const updateQuantityState = (value, item) => {
        if (value <= 0) return;
        const newState = quantities.map((q, ind) => {
          if (item.id === ind + 1) {
            return {...q, quantity: value};
          }
          return q;
        });

        setQuantities(newState);
      };

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
                                    min='1'
                                    max="99"
                                    onChange={(e) => {updateQuantityState(e.target.value, item);}}
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
