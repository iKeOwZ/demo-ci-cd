import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import BestPractices from './components/BestPractices';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <ul className="nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/best-practices">Best Practices</NavLink></li>
            </ul>
            <div className="pages">
              <Route exact path="/" component={Home}/>
              <Route path="/best-practices" component={BestPractices}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;