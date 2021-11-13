import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./SurvivalGameMode.css"

function SurvivalGameMode() {
    return (
            <Container fluid className="survival p-0 overflow-hidden" id="survival">
            <br/>
                <Row className="survivalRow">

                    <Col md={true} sm={true}>
                        <h3>Survival</h3>
                        <br/>
                        <p>A more traditional minecraft experience with some customizations to keep things interesting.</p>
                        <p>Go to /spawn in game to get to the main survival world spawn.</p>
                        <p>Claim your land with GriefPrevention, trade with players on the Auction House, Discover custom mini-bosses and Battle Regions!</p>
                    </Col>

                </Row>
            </Container>
    );
}

export default SurvivalGameMode;