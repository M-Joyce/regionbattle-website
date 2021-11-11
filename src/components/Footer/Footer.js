import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="12" className="footer-col">
                    <h4>RegionBattle Minecraft Server</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;