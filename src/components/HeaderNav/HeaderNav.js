import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from "react";
import "./HeaderNav.css"

function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="headerNav">
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#howToPlay">How to Play</Nav.Link>
                    <Nav.Link href="#discord">Discord</Nav.Link>
                    <Nav.Link target="blank" href="http://play.regionbattle.com:8123/">SMP Map</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;