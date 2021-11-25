import './VoteRoute.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function VoteRoute() {
    return (
        <div className="voteRoute">
            <Header/>
            <div className="voteTitle">
                <h1>Vote for RegionBattle!</h1>
            </div>

            <Container fluid className="vote p-0 overflow-hidden" id="vote">
                <Row className="voteRow">

                    <Col md={true} sm={true}>
                        <a target="blank" href="https://best-minecraft-servers.co/server-regionbattle.1311/vote">Vote on best-minecraft-servers.co</a>
                        <br/>
                        <a target="blank" href="https://minecraftservers.org/server/624356">Vote on minecraftservers.org</a>
                        <br/>
                        <a target="blank" href="https://minecraft-server-list.com/server/481756/vote/">Vote on minecraft-server-list.com</a>
                        <br/>
                        <a target="blank" href="https://minecraft-mp.com/server/293346/vote/">Vote on minecraft-mp.com</a>
                        <br/>
                        <a target="blank" href="https://www.planetminecraft.com/server/regionbattle/">Vote on Planet Minecraft</a>
                        <br/>
                        <a target="blank" href="https://topminecraftservers.org/server/21394">Vote on topminecraftservers.org</a>
                        <br/>
                        <a target="blank" href="https://minebrowse.com/server/3550">Vote on minebrowse.com</a>
                        <br/>
                        <a target="blank" href="https://craft-list.net/minecraft-server/RegionBattle-Custom-Plugins-for-Team-PVP---SMP---Cross-Play/vote">Vote on craft-list.net</a>

                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default VoteRoute;
