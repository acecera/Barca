import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="././././public/images/fcb_logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' FC Barcelona'}
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;