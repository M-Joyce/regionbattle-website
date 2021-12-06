import './RulesRoute.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Accordion, Button, Col, Collapse, Container, Row} from "react-bootstrap";
import React, {useState} from "react";

function RulesRoute() {
    const [open, setOpen] = useState(false);
    return (
        <div className="rulesRoute">
            <Header/>
            <div className="rulesTitle">
                <h1>RegionBattle Server Rules</h1>
            </div>

            <Container fluid className="rules p-0 overflow-hidden" id="rules">
                <Row className="rulesRow">

                    <h4>At RegionBattle, our goal is to provide players with a fun and unique Minecraft experience. <br/>
                        Be sure to follow the RegionBattle rules to ensure all players can enjoy their time on our server.</h4>

                    <Col md={true} sm={true}>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>No Hacking, Cheating, or Exploiting.</Accordion.Header>
                                <Accordion.Body>
                                    At RegionBattle, we want to facilitate a level playing field for all of our players.
                                    Hacking, Cheating, and exploiting results in an unfair (and sometimes abusive) gameplay experience to other players on our server, and for this reason is not allowed.<br/>
                                    Examples: Hacked/Cheat Clients, Using item duplication exploits within Minecraft.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Absolutely no griefing in the survival worlds.</Accordion.Header>
                                <Accordion.Body>
                                    Absolutely no griefing will be tolerated in the RegionBattle survival worlds. Examples of this include but are not limited to: lava casting, damaging player builds, farms, unnecessary use of TNT above ground, killing named mobs or a player's villagers.<br/>
                                    *Note: Griefing is allowed in the <strong>Battle</strong> worlds, as these worlds are reset during every scheduled restart.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>No harassment or abuse.</Accordion.Header>
                                <Accordion.Body>
                                    On our server, the goal is to have fun. While emotions can run high at times during PVP, please refrain from being excessively cruel to other players. This rule is subject to staff discretion.<br/>
                                    Examples: Spam killing specific players, excessive harassment/insulting of a specific player.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Be kind and respectful.</Accordion.Header>
                                <Accordion.Body>
                                    This is a blanket rule to cover things that absolutely will not be tolerated, such as discrimination/racism, excess swearing/vulgarity, etc.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default RulesRoute;
