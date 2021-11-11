import React from "react";
import "./Discord.css"
import {Col, Container, Image, Row} from "react-bootstrap";
import discordLogo from "../../assets/discordLogo.svg";

function Discord() {
    return (
        <Container fluid id="discord" className="discordContainer">
            <Row>
                <Col>
                    <Image src={discordLogo} fluid className="discordLogo"/>
                    <a target="blank" href="http://discord.regionbattle.com">RegionBattle Discord</a>
                </Col>
            </Row>

        </Container>
    );
}

export default Discord;