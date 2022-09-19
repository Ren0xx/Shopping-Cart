import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";

const App = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setError(err.message);
                setItems(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const addToCart = (newItem, quantity) => {
        if (quantity <= 0 || quantity > 100 || quantity[0] === "0") return;
        setCart((cart) => [...cart, [newItem, quantity]]);
    };

    return (
        <Container className='cont'>
            <BrowserRouter>
                <NavigationBar />
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {loading && (
                    <div className='text-light'>A moment please...</div>
                )}
                <Routes>
                    <Route
                        path='/'
                        element={
                            !loading && (
                                <Shop
                                    items={items}
                                    cart={cart}
                                    addToCart={addToCart}
                                    setData={setItems}
                                />
                            )
                        }
                    />
                    <Route
                        path='/cart'
                        element={!loading && <ShoppingCart cart={cart} />}
                    />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
