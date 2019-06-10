import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="Navbar-Brand">
            <img
                alt="Barca Logo"
                src="/images/FC_Barcelona.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' FC Barcelona'}
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#scores">Scores</Nav.Link>
                <Nav.Link href="#tickets">Tickets</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;