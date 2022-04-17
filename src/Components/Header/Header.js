import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import auth from '../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
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
                        {
                            user ? <button onClick={handleSignOut} className="mx-md-2 btn btn-link text-white text-decoration-none">Logout</button> : <Nav.Link as={Link} className="mx-md-2" to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;