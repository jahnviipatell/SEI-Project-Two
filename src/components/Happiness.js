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
    <div>
      {happiness.map(quote => {
        return (
          <li key={quote._id}>
            <p>{quote.quoteText}</p>
            <p>{quote.quoteAuthor}</p>
          </li>
        )
      })}
    </div>
  )

}

export default Happiness