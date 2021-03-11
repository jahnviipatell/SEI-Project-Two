import React from 'react'
import { Link } from 'react-router-dom'

const GenreIndex = () => {


  return (
    <ul className="genre-components">
      <li className="genre-list">
        <Link to="/motivational">MOTIVATIONAL</Link>
      </li>
      <li className="genre-list">
        <Link to="/happiness">HAPPINESS</Link>
      </li>
      <li className="genre-list">
        <Link to="/time">TIME</Link>
      </li>
      <li className="genre-list">
        <Link to="/inspirational">INSPIRATIONAL</Link>
      </li>
    </ul>
  )

}

export default GenreIndex
