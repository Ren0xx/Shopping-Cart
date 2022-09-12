import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";                                                                                                                            
import "../styles/App.css";
import "../styles/Card.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export const Shop = () => {
    const [cart, setCart] = useState([]);
    const items = [
        {
            name: "hoodie",
            img: "#",
            // price: Math.floor(25 + Math.random() * (50 - 25)) + "$"
            price: "25$",
        },
        {
            name: "trousers",
            img: "#",
            price: "25$",
        },
        {
            name: "basketball cap",
            img: "#",
            price: "25$",
        },
        {
            name: "black T-shirt",
            img: "#",
            price: "25$",
        },
        {
            name: "hoodie",
            img: "#",
            price: "25$",
        },
        {
            name: "trousers",
            img: "#",
            price: "25$",
        },
        {
            name: "basketball cap",
            img: "#",
            price: "25$",
        },
        {
            name: "black T-shirt",
            img: "#",
            price: "25$",
        },
    ];
    return (
        <>
            <div className='cart'>
                <Button variant='primary' size='lg'>
                    Checkout
                </Button>
                <h5>Items: {cart.length}</h5>
            </div>
            <div className='shop'>
                {items.map((item, index) => {
                    return (
                        <Container
                            key={index}
                            className='card'
                            >
                            <Row>
                                <h5>{item.name}</h5>
                            </Row>
                            <Row>
                                <img src={item.img} alt='...' />
                            </Row>
                            <Row>
                                <h5>{item.price}</h5>
                            </Row>

                            <Form>
                                <Form.Control
                                    size='sm'
                                    name='price'
                                    placeholder='Enter Amount of Items'
                                />

                                <Button size='sm'>Add to Cart</Button>
                            </Form>
                        </Container>
                    );
                })}
            </div>
        </>
    );
};
export default Shop;
