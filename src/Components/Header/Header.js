import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div >
            <Navbar className='navbar-container' variant="dark">
                <Container>
                    <Navbar.Brand className="nav-logo" href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="mx-md-2" href="#home">Home</Nav.Link>
                        <Nav.Link className="mx-md-2" href="#features">Services</Nav.Link>
                        <Nav.Link className="mx-md-2" href="#blogs">Blogs</Nav.Link>
                        <Nav.Link className="mx-md-2" href="#about">About</Nav.Link>
                        <Nav.Link className="mx-md-2" href="#login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;