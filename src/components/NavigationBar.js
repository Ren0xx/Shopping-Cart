import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/style.css";
import Navbar from "react-bootstrap/Navbar";
import LinkContainer from 'react-router-bootstrap/LinkContainer'

const NavigationBar = () => {
    return (
            <Navbar bg='dark' variant='dark' fixed='top' className="justify-content-center">
                <Nav size='sm' fill>
                    <LinkContainer to='/' >
                        <Nav.Link className="text-light"> 
                        Go to Shop

                        </Nav.Link>

                    </LinkContainer>
                </Nav>
            </Navbar>
    );
};
export default NavigationBar;
