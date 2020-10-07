import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Routes } from './routes';
class App extends Component {
    constructor(props){
        super();
    }

    render(){
        return ( 
            <div className = "App" >
                <Router>
                    <Routes />
                </Router>
            </div>
        )
    };
}

export default App;