import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Navigation from './components/pages/Navigation'
import Home from './components/pages/Home'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <header>
                <Navigation />
            </header>
          <div>
            <Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/signUp" component={SignUp} exact/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
