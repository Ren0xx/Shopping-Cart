import React from "react";
import Button from "react-bootstrap/Button";

const ShoppingCart = (props) => {
    return (
        <div className='cart'>
            <Button variant='primary' size='lg'>
                Checkout
            </Button>
            <h5>Items: {props.cart.length}</h5>
        </div>
    );
};
export default ShoppingCart;
