import React, {Component} from 'react';
import './App.css';
import history from './history';
import {
    BrowserRouter,
  } from "react-router-dom";
import { Routes } from './routes/index';
class App extends Component {
    constructor(props){
        super();
    }

    render(){
        return ( 
            <div className = "App" >
                <BrowserRouter history={history}>
                    <Routes />
                </BrowserRouter>
            </div>
        )
    };
}

export default App;