import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./Hero.css"
import heroImage from "../../assets/HeroImg.png";

function Hero() {
    return (
            <Container fluid className="hero p-0 overflow-hidden">
                <Row>
                    <Col>
                        <Image src={heroImage} fluid className="heroImage" />
                    </Col>
                </Row>
            </Container>
    );
}

export default Hero;