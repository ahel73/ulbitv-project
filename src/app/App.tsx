import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './style/index.scss';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';



const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}> Главная</Link>
            <Link to={'./about'}>о Сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>                
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={ <MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default App;