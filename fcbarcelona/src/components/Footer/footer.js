import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <Container>
            <Navbar fixed="bottom" expand="lg" bg="primary">
                <Navbar.Brand>Mas Que Un Club</Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Footer;