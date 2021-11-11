import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from "react";
import "./HeaderNav.css"

function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">How to Play</Nav.Link>
                    <Nav.Link href="#features">Discord</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;