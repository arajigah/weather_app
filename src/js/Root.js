import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import NavBar from './navigation/NavBar.js';
import CurrentWeather from './components/CurrentWeather.js';
import ThreeDay from './components/ThreeDay.js';
import FiveDay from './components/FiveDay.js';


class Root extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <Switch>
                        <Route exact path='/' component={CurrentWeather} />
                        <Route path='/3day' component={ThreeDay} />
                        <Route path='/5day' component={FiveDay} />
                    </Switch>
                </NavBar>
            </div>
        )
    }
}

export default Root;
