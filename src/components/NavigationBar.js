import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/App.css"

const NavigationBar = () => {
    return (
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href='/'>Go to Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/shop'> Go to Shop</Nav.Link>
                </Nav.Item>
            </Nav>
    );
};
export default NavigationBar;   
