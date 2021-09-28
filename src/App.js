import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import About from './components/subcomponents/About';
import Ingredients from './components/subcomponents/Ingredients';
import Instructions from './components/subcomponents/Instructions';
import NutritionTable from './components/subcomponents/NutritionTable';
import Profile from './components/Profile';
import FridgeContents from './components/FridgeContents';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/cooking">
            <FridgeContents />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
