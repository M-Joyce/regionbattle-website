import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import "./HowToPlay.css"
import MCMultiplayerButton from "../../assets/MCMultiplayerButton.png";
import MCAddServerButton from "../../assets/MCAddServerButton.png";
import MCEditServerInfo from "../../assets/MCEditServerInfo.png";

function HowToPlay() {
    return (
            <Container fluid className="howToPlay p-0 overflow-hidden" id="howToPlay">
            <br/>
                <Row className="connectDirections">
                    <span className="playNow">Play RegionBattle Now!</span>

                    <Col md={true} sm={true} className="playJava">
                        <h4>To join our server on Java:</h4>
                        <ol>
                            <li>1.) Purchase and Download Minecraft from Minecraft.net</li>
                            <li>2.) Launch Minecraft</li>
                            <li>3.) From the Minecraft Main Menu, select <span className="minecraftFont">"Multiplayer"</span>.</li>
                            <Image src={MCMultiplayerButton} fluid/>
                            <li>4.) Click <span className="minecraftFont">"Add Server"</span> at the bottom of the Multiplayer Menu.</li>
                            <Image src={MCAddServerButton} fluid/>
                            <li>5.) Edit the <span className="minecraftFont">"Server Name"</span> and <span className="minecraftFont">"Server Address"</span> fields as follows:</li>
                            <Image src={MCEditServerInfo} fluid className="serverInfoJavaImage"/>
                            <li>6.) Press <span className="minecraftFont">"Done"</span>, and then Double Click the "RegionBattle" Server in your list.</li>
                        </ol>
                    </Col>

                    <Col md={true} sm={true} className="playBedrock">
                        <h4>RegionBattle also has Java/Bedrock Cross-play:</h4>
                        <ol>
                            <li>Connect with IP: play.regionbattle.com:19132</li>
                            <li>For Consoles, you may need to modify your Network/DNS settings using <a href="https://github.com/Pugmatt/BedrockConnect#readme" target="blank">Bedrock Connect</a></li>
                        </ol>
                    </Col>
                </Row>
            </Container>
    );
}

export default HowToPlay;