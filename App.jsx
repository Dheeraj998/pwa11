import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
//import Navbar from '../components/pagesNavbar1';
//import Student from './Student/pages/Student';
import Application from './components/Application';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router>
        <div>
          <Navbar />
    
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/Application" component={Application} />
          {/* <Route path="/Student" component={Student} /> */}
        </div>
      </Router>
      
      <Footer dark />
      </div>
       {/* <Router> 
         <div>
         
           <Route exact path="/Student" component={Student} /> 
         
        </div>
      </Router>  */}
      </div>
    );
  }
}

export default App;
