import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";

const App = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products?limit=16`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setItems(actualData);
            } catch (err) {
                setItems(null);
            }
        };
        getData();
    }, );
    
    const addToCart = (newItem, quantity) => {
        if (quantity <= 0 || quantity > 100 || quantity[0] === "0") return;
        for (let i = 0; i < quantity; i++) {
            setCart((cart) => [...cart, newItem]);
        }
    };

    return (
        <Container className='cont'>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={ <Shop items={items} cart={cart} addToCart={addToCart} setData={setItems}/>}/>
                    <Route path='/cart' element={<ShoppingCart cart={cart} />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
