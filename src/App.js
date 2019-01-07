import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/socicon.css';
import Home from './component/home'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
        <Route path="/" component={Home} exact />
        </Switch>
      </div>
      </Router>
     
    );
  }
}

export default App;
