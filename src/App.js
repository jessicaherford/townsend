import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Bio, Gallery, Contact } from "./components";

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/bio" exact component={() => <Bio />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
