import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <h1>login page</h1>
          </Route>

          <Route path='/checkout'>
            <h1>checkout</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
