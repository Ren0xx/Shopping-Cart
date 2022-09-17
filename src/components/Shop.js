import React from "react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ShopItems from "./ShopItems";

const Shop = (props) => {
   
    return (
        <>
            <ShopItems items={props.items} addToCart={props.addToCart} />
            <ShoppingCartIcon cart={props.cart}  />
            
        </>
    );
};
export default Shop;
