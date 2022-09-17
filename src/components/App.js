import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./Homepage";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";

const App = () => {
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
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
            quantity: 0,
        },
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

    const addToCart = (newItem, quantity) => {
        if (quantity <= 0 || quantity > 100 || quantity[0] === "0") return;
        for (let i = 0; i < quantity; i++) {
            setCart((cart) => [...cart, newItem]);
        }
    };
    return (
        <Container className='cont'>
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route index path='' element={<Homepage />} />
                    <Route path='/shop' element={<Shop  items={items} cart={cart} addToCart={addToCart} />} />
                    <Route path='/shop/cart' element={<ShoppingCart cart={cart} />} />
                    
                    
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
