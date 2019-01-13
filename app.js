import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import login from './pages/login.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={login}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
