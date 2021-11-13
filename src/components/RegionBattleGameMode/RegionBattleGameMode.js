import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./RegionBattleGameMode.css"

function RegionBattleGameMode() {
    return (
            <Container fluid className="regionBattle p-0 overflow-hidden" id="regionBattle">
            <br/>
                <Row className="regionBattleRow">

                    <Col md={true} sm={true}>
                        <h3>RegionBattle</h3>
                        <br/>
                        <p>The original RegionBattle Game Mode!</p>
                        <p>Matches start by joining /rbspawn. Teams will automatically be assembled every 5 minutes when 2 or more players enter the lobby.</p>
                        <p>Prepare for battle in the safety of your team's region, but beware! You aren't safe forever!</p>
                    </Col>

                </Row>
            </Container>
    );
}

export default RegionBattleGameMode;