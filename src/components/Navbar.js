import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="homeDiv">
        <Link to="/" className="home">HOME</Link>
      </div>
      <div className="motivationalDiv">
        <Link to="/motivational" className="motivational">MOTIVATIONAL</Link>
      </div>
      <div className="happinessDiv">
        <Link to="/happiness" className="happiness">HAPPINESS</Link>
      </div>
      <div className="timeDiv">
        <Link to="/time" className="time">TIME</Link>
      </div>
    </nav>
  )
}

export default Navbar
