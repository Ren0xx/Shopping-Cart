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

    /**
     * If the quantity is less than or equal to 0, or greater than 100, or the first character of the
     * quantity is 0, then return. Otherwise, set the cart to the current cart with the new item and
     * quantity added to it.
     * @param newItem - the item that is being added to the cart
     * @param quantity - the quantity of the item the user wants to add to the cart
     * @returns the new state of the cart.
     */
    const addToCart = (newItem, quantity) => {
        if (quantity <= 0 || quantity > 100 || quantity[0] === "0") return;
        setCart((cart) => [...cart, [newItem, quantity]]);
    };

    /**
     * If given item is not in the cart, then remove it from the cart.
     * @param item - The item that was clicked on.
     */
    const removeFromCart = (item) => {
        setCart((cart) =>
            cart.filter((cartItem) => {
                return cartItem !== item;
            })
        );
    };

    const changeQuantity = (item, increase) => {
        const newState = cart.map((cartItem) => {
            let valueToAdd = (increase ) ? 1 : -1;
            if (cartItem === item) {
                cartItem[1] = parseInt(cartItem[1]) + parseInt(valueToAdd);
            }
            return cartItem;
        });

        setCart(newState);
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
                        element={
                            !loading && (
                                <ShoppingCart
                                    cart={cart}
                                    remove={removeFromCart}
                                    changeQuantity={changeQuantity}
                                />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
