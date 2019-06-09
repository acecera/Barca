import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="Navbar.Brand">
            <img
                alt=""
                href="../../../public/images/FC_Barcelona.svg"
                src="../../../public/images/FC_Barcelona.svg"
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