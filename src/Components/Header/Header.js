import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div >
            <Navbar className='navbar-container' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} className="nav-logo" to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="mx-md-2" to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} className="mx-md-2" to="/services">Services</Nav.Link> */}
                        <Nav.Link as={Link} className="mx-md-2" to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} className="mx-md-2" to="/about">About</Nav.Link>
                        <Nav.Link as={Link} className="mx-md-2" to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;