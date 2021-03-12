import React from 'react'
import { Link } from 'react-router-dom'

const GenreIndex = () => {

  const genreArray = ['motivational', 'happiness', 'time', 'inspirational', 'success', 'power', 'science', 'patience', 'friendship']

  return (
    <ul className="genre-components">
      {
        genreArray.map(genre => {
          return (
            <li key={'genre'} className="genre-list">
              <Link to={`/${genre}`}>{genre.toUpperCase()}</Link>
            </li>
          )
        })
      }
    </ul>
  )

}

export default GenreIndex
