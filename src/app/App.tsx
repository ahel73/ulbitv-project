import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './style/index.scss';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';



const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}> Главная</Link>
            <Link to={'./about'}>о Сайте</Link>
            <AppRouter />
        </div>
    )
}
export default App;