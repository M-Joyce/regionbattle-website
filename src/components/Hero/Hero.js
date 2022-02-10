import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./Hero.css"
import heroImage from "../../assets/HeroImg.jpg";

function Hero() {
    return (
            <Container fluid className="hero p-0 overflow-hidden">
                <Row>
                    <Col>
                        <Image src={heroImage} fluid alt="RegionBattle Minecraft Server Hero Image, Join our Minecraft Server IP play.regionbattle.com" className="heroImage" />
                    </Col>
                </Row>
            </Container>
    );
}

export default Hero;