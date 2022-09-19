import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';

import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => { 
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'./about'}>о Сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>                
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={ <MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default App;