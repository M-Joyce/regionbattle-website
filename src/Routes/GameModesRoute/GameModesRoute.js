import './GameModesRoute.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SurvivalGameMode from "../../components/SurvivalGameMode";
import RegionBattleGameMode from "../../components/RegionBattleGameMode";
import BattleGameMode from "../../components/BattleGameMode";

function GameModesRoute() {
    return (
        <div className="GameModesRoute">
            <Header/>
            <div className="gameModesTitle">
                <h1>Game Modes</h1>
            </div>
            <SurvivalGameMode/>
            <RegionBattleGameMode/>
            <BattleGameMode/>
            <Footer/>
        </div>
    );
}

export default GameModesRoute;
