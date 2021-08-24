import { Link } from 'react-router-dom';
import resume from "../assets/Resume/Leigh Dahlin Resume 08232021.pdf";

export default function Navbar() {

    return (
        <header id="nav">
        <div id="header-div">
          <Link to="/">
            <h3  >Portfolio</h3>
          </Link>
          <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link to="/about-me" className="nav-link">
              About Me
            </Link>
            <Link to="/projects" id="work" className="nav-link">
              Work
            </Link>
            <Link to="/skills" id="skills" className="nav-link">
              Skills
            </Link>
            <Link to="/contact" id="contact" className="nav-link">
              Contact
            </Link>
            <a id="resume" className="nav-link" href={resume} target="blank">Resume</a>
          </nav>
        </div>
      </header>
    
    )
}