import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import HeaderBanner from "../HeaderBanner";
import HeaderNav from "../HeaderNav";

function Header() {
    return (
        <Container fluid className="header p-0 overflow-hidden">
            <HeaderBanner/>
            <HeaderNav/>
        </Container>
    );
}

export default Header;