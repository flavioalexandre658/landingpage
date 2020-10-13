import React from 'react';
import {
    Switch
} from "react-router-dom";

import TemplateLanding from '../components/templatelanding/templatelanding';
import Login from '../components/login/login';
import Edit from '../components/edit/edit';

import Route from './route';
export const Routes = () =>{

    return(
        <Switch>
            <Route path="/" exact component={(props) =><TemplateLanding {...props}/>} />
            <Route path="/admin" exact component={Login} />
            <Route path="/edit" component={Edit} isPrivate />
        </Switch>
    );
}