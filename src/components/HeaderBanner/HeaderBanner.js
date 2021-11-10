import React from "react";
import "./HeaderBanner.css"
import {Image} from "react-bootstrap";
import bannerImage from '../../assets/RegionBattleHeaderBanner.png'

function HeaderBanner() {
    return (
        <Image src={bannerImage} fluid className="headerBanner" />
    );
}

export default HeaderBanner;