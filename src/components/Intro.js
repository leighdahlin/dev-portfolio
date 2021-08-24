import { Link } from 'react-router-dom';

export default function Intro() {

    return (
        <main id="intro" className="px-3">
        <h1>Leigh Dahlin</h1>
        <p className="lead">Full-Stack Web Developer</p>
        <p className="lead">
          <Link to="/dev-portfolio/about-me">
            <button id="view" className="btn btn-lg btn-intro fw-bold">View Portfolio</button>
          </Link>
        </p>
      </main>
    
    )
}