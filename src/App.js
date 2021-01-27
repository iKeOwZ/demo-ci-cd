import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <ul className="nav">
              <li><NavLink exact to="/">Home</NavLink></li>
            </ul>
            <div className="pages">
              <Route exact path="/" component={Home}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;