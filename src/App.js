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
import Summary from './components/subcomponents/Summary';
import Ingredients from './components/subcomponents/Ingredients';
import Instructions from './components/subcomponents/Instructions';
import NutritionTable from './components/subcomponents/NutritionTable';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/recipe">
            <Redirect to="/recipe/about" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/recipe/about">
            <Recipe component={<Summary />} />
          </Route>
          <Route path="/recipe/ingredients">
            <Recipe component={<Ingredients />} />
          </Route>
          <Route path="/recipe/prepare">
            <Recipe component={<Instructions />} />
          </Route>
          <Route path="/recipe/nutrition">
            <Recipe component={<NutritionTable />} />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
