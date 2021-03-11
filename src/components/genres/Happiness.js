import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Happiness = () => {

  const [happiness, setHappiness] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=15')
      setHappiness(data.data)
    }
    getData()
  }, [])

  if (!happiness) return null

  return (
    <div className="border">
      <ul>
        {happiness.map(quote => {
          return (
            <li key={quote._id}>
              <p className="list-quote-text">{quote.quoteText}</p>
              <p className="list-quote-author">~ {quote.quoteAuthor}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default Happiness