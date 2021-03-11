import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-home">
        <Link to="/" className="home">HOME</Link>
      </div>
      <div className="nav-components">
        <Link to="/motivational" className="motivational">MOTIVATIONAL</Link>
        <Link to="/happiness" className="happiness">HAPPINESS</Link>
        <Link to="/time" className="time">TIME</Link>
      </div>
    </nav>
  )
}

export default Navbar
