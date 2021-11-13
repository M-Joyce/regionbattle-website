import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./BattleGameMode.css"

function BattleGameMode() {
    return (
            <Container fluid className="battle p-0 overflow-hidden" id="battle">
            <br/>
                <Row className="battleRow">

                    <Col md={true} sm={true}>
                        <h3>Battle</h3>
                        <br/>
                        <p>Battle Game Mode</p>
                        <p>Head over to /battlespawn and then /joinbattle when you are ready to be thrown into the action.</p>
                        <p>Teams are randomly assigned, and each team's spawn point changes after each 2 hour round.</p>
                        <p>Prepare for battle by gathering supplies, or search for structures with randomized loot!</p>
                    </Col>

                </Row>
            </Container>
    );
}

export default BattleGameMode;