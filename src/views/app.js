import React, { Component } from 'react';

import Router from './../router/index'
import TopBar from './layout/topbar'

class App extends Component {
  constructor() {
    super(),
    this.state = {
      userName: 'jiang',
    }
  }
  render() {
    return (
      <div className="App">
        <TopBar userName={this.state.userName}></TopBar>
        <div className="AppContent">
          <h5>la</h5>
          <Router></Router>
        </div>
      </div>
    );
  }
}

export default App;