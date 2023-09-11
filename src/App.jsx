import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import About from "./component/About";
import Academics from "./component/Academics";
import Contact_Us from "./component/Contact_Us";
import Gallery from "./component/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" Component={Home} exact>
              <Home />
            </Route>
            <Route path="/academics" Component={Academics} exact>
              <Academics />
            </Route>
            <Route path="/gallery" Component={Gallery} exact>
              <Gallery />
            </Route>
            <Route path="/about" Component={About} exact>
              <About />
            </Route>
            <Route path="/contact" Component={Contact_Us} exact>
              <Contact_Us />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
