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
    <Router>
      <Switch>

        <div className="cover-container" id="cover-container">
        <Navbar />

        <Route exact path="/dev-portfolio">
            <Intro />
          </Route>

          <Route exact path="/dev-portfolio/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/dev-portfolio/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route exact path="/dev-portfolio/skills">
            <Navbar />
            <Skills />
          </Route>
          <Route exact path="/dev-portfolio/contact">
            <Navbar />
            <Contact />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
