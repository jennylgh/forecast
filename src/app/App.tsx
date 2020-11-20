import React from 'react';
import style from './App.module.css';
import {ForecastContainer} from "./modules/weather/ForecastContainer";

//global styles
import 'antd/dist/antd.css'
import './style.css';

function App() {
    return (
        <div className={style["app-root"]}>
            <header className={style.header}>
                <div>Weather</div>
            </header>
            <section className={style.content}>
                <ForecastContainer />
            </section>
        </div>
    );
}

export default App;
