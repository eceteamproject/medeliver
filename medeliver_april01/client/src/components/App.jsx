import React, { useState } from "react";

import Login from "./Login";
import Home from "./Home";
import Cart from "./Cart";
import Products from "./Products";
import Registration from "./Registration";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import Map from "./Map";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/registration" component={Registration} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/map" component={Map} />{" "}
        </Switch>
      </div>
    </Router>
  );

  // version of react-touter-dom must be 5.2!!!! Debugged 2 hours due to v6.
}

export default App;
