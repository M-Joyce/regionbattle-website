import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function HeaderNav() {
    return (
        <Container fluid className="headerNav">
            <Row>
                <Col md="12">
                        <p>HeaderNav</p>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderNav;