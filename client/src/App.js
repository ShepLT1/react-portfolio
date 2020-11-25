import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
// import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
