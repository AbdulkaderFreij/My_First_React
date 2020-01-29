import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "/home/abdulkader/Desktop/mysecondreact/src/output.svg";
import "./App.css";
import Slider from "./components/Slider.js";
import Slider2 from "./components/Slider2.js";
import Slider3 from './components/Slider3';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/home">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/home" exact activeStyle={{ color: "red" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news">News and Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div class="wrapper">
            <div class="heart x1"></div>
            <div class="heart x2"></div>
            <div class="heart x3"></div>
            <div class="heart x4"></div>
          </div>
        </header>
        
        <Switch>
        <Route path='/home' exact strict render={
            ()=>{
              return (<Slider/>)
            }
          } />
          
                  <Route path='/news' exact strict render={
            ()=>{
              return (<Slider2/>)
            }
          } />
          
                    <Route path='/contact' exact strict render={
            ()=>{
              return (<Slider3/>)
            }
          } />
          </Switch>
          <footer>
          <p>&copy; Copyright 2020 Kids Я Us!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
