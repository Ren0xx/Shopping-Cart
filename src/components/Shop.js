import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ShopItems from "./ShopItems";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const items = [
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
        {
            name: "trousers",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "basketball cap",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "black T-shirt",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "hoodie",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "trousers",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "basketball cap",
            img: "#",
            price: "25$",
            quantity: 0,
        },
        {
            name: "black T-shirt",
            img: "#",
            price: "25$",
            quantity: 0,
        },
    ];
    return (
        <>
            <ShoppingCart cart={cart} setCart={setCart} />
            <ShopItems items={items} />
        </>
    );
};
export default Shop;
