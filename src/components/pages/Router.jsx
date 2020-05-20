import React from "react";
import { Switch, Route } from "react-router";

import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Navigation from "./Navigation";

export const Router = () => (
    <div>
        <Navigation/>
        <Switch>
            <Route path='/signUp' exact={true} name='SignUp' component={SignUp} />
            <Route path='/' exact={true} name='Login' component={Login} />
            <Route path='/home' exact={true} name='Home' component={Home} />
        </Switch>
    </div>
);
