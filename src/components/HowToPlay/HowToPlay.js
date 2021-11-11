import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./HowToPlay.css"
import MCMultiplayerButton from "../../assets/MCMultiplayerButton.png";
import MCAddServerButton from "../../assets/MCAddServerButton.png";
import MCEditServerInfo from "../../assets/MCEditServerInfo.png";

function HowToPlay() {
    return (
            <Container fluid className="howToPlay p-0 overflow-hidden">
                <Row>
                    <Col>
                        <h1>Play RegionBattle Now!</h1>
                        <h3>To join our server on Java:</h3>
                        <ol>
                            <li>1.)Purchase and Download Minecraft from Minecraft.net</li>
                            <li>2.)Launch Minecraft</li>
                            <li>3.)From the Minecraft Main Menu, select "Multiplayer".</li>
                            <Image src={MCMultiplayerButton} fluid/>
                            <li>4.)Click "Add Server" at the bottom of the Multiplayer Menu.</li>
                            <Image src={MCAddServerButton} fluid/>
                            <li>5.)Edit the "Server Name" and "Server Address" fields as follows:</li>
                            <Image src={MCEditServerInfo} fluid/>
                            <li>6.)Press "Done", and then Double Click the "RegionBattle" Server in your list.</li>
                        </ol>



                        <h3>To join our server on Bedrock:</h3>
                    </Col>
                </Row>
            </Container>
    );
}

export default HowToPlay;