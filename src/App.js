import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Bio, Gallery, Contact, Exhibitions } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/bio" exact component={() => <Bio />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/exhibitions" exact component={() => <Exhibitions />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
