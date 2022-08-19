import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">G u a p N a r c</Navbar.Brand>
                <Nav className="me-auto NavLinks">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/register">Sign-up</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    );
}

export default NavBar;