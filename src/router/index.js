import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import home from '../views/home/index'
import adput from '../views/adput/index'

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" component={adput}  exact />
          <Route path="/home" component={home} />
          <Route path="/adput" component={adput} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </HashRouter>
    )
  }
}