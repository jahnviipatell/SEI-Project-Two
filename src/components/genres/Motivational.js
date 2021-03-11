import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Motivational = () => {

  const [motivation, setMotivation] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=15&page=3')
      setMotivation(data.data)
    }
    getData()
  }, [])

  if (!motivation) return null

  return (
    <div className="border">
      <ul>
        {motivation.map(quote => {
          return (
            <li key={quote._id}>
              <p className="list-quote-text">{quote.quoteText}</p>
              <p className="list-quote-author">{quote.quoteAuthor}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default Motivational