import React from 'react';
import TemplateLanding from './components/templatelanding/templatelanding';
import Home from './components/home/home';
import {
    Switch,
    Route
} from "react-router-dom";
import Edit from './components/edit/edit';

export const Routes = () =>{

    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/template" component={(props) =><TemplateLanding {...props}/>} />
            <Route path="/edit" component={Edit} />
        </Switch>
    );
}