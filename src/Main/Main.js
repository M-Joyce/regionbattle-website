import React from 'react';
import {Route, Routes} from 'react-router';

import App from '../App';
import GameModesRoute from '../Routes/GameModesRoute/GameModesRoute';
import HomeRoute from "../Routes/HomeRoute/HomeRoute";

const Main = () => {

    return (
        <Routes>
            <Route exact path='/' element={<HomeRoute/>}/>
            <Route exact path='/gamemodes' element={<GameModesRoute/>}/>
        </Routes>
    );
}

export default Main;