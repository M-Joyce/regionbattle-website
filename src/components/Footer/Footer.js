import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="12" className="footer-col">
                    <h3>Footer RegionBattle MinecraftServer</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;