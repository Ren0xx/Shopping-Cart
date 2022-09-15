import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/style.css";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
    return (
            <Navbar bg='dark' variant='dark' fixed='top' className="justify-content-center">
                <Nav size='sm' fill>
                    <Nav.Link href='/'>Go to Home</Nav.Link>
                    <Nav.Link href='/shop'> Go to Shop</Nav.Link>
                </Nav>
            </Navbar>
    );
};
export default NavigationBar;
