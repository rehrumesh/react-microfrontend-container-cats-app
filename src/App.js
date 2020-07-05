import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
}

export default App;
