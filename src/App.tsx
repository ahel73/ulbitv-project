import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './style/index.scss';

import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ThemeContext, Theme } from './theme/ThemeContent';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}> Главная</Link>
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