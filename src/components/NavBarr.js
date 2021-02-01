import React from 'react';
 import './NavBarr.css'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import CartWidget from './CartWidget';
 


 const NavBarr = () => {

    return (

        <Navbar collapseOnSelect expand="xl" bg="danger" variant="dark" className="pl-5 pr-5">
            <Container>
                <img className="header__logo" alt="logo" src="https://th.bing.com/th/id/OIP.TMpu3fnp6XBInPETVXRFkgHaFC?w=254&h=180&c=7&o=5&pid=1.7  " />
                <Navbar.Brand href="#home"  >E-Sport</Navbar.Brand>

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
                        <Nav.Link className="header__search">
                            <input type="text" className="header__searchInput" />

                        </Nav.Link>
                        <Nav.Link className="header__search">
                            <SearchIcon className="header__searchIcon" />
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            CART</Nav.Link>
                        <CartWidget />

                    </Nav>
                    <Nav.Link to={""} className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello</span>
                            <span className="header__optionLineTwo"> Sign </span>
                        </div>
                    </Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBarr;

 