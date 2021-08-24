import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Nabar';
import Intro from './components/Intro';
import AboutMe from './components/About-Me';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename="/dev-portfolio">
      <div className="cover-container" id="cover-container">
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Intro />
        </Route>
        <Route exact path="/about-me">
          <AboutMe />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
