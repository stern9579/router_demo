import React from "react";
import {
  BrowserRouter,
  Link, 
  Switch, 
  Route
} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
      </p>
      <Switch>
        <Route exact path="/about" component={About}>
          <About/>
        </Route>
        <Route exact path="/" component={Home}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
