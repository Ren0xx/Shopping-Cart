import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ShopItems from "./ShopItems";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([
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
    ]);

    // TODO: Make this
    const addToCart = (newItem, quantity) => {
        if (quantity <= 0) return;
        for (let i = 0; i < quantity; i++) {
            setCart(cart => [...cart, newItem]);
        }
    };
    return (
        <>
            <ShoppingCart cart={cart} setCart={setCart} />
            <ShopItems items={items} addToCart={addToCart} />
        </>
    );
};
export default Shop;
