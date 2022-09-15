import React from "react";

const ShoppingCart = (props) => {
    return (
        <div className='cart'>
            <h5>Items: {props.cart.length}</h5>
        </div>
    );
};
export default ShoppingCart;
