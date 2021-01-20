import React from 'react';
import {Navbar,Container,Nav,NavDropdown}  from "react-bootstrap";

import CartWidget from './CartWidget';

export const Header = () => {
    
    return (
       
        <Navbar collapseOnSelect expand="xl" bg="danger" variant="dark" className="pl-5 pr-5">
            <Container>
            <Navbar.Brand href="#home" className="mr-5 mt-2 mb-2">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features" className="mr-5">Home</Nav.Link>
                    <Nav.Link href="#features" className="mr-5">Oferta</Nav.Link>
                    <Nav.Link href="#features" className="mr-5">Tendencia </Nav.Link>


                    <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Verduras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Varios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ayuda</NavDropdown.Item>
                    </NavDropdown>

                   
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>

                    <Nav.Link eventKey={2} href="#memes">
                        CART</Nav.Link>
                        <CartWidget/>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}
 export default Header;
