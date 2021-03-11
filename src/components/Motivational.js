import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Motivational = () => {

  const [motivation, setMotivation] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=15')
      setMotivation(data.data)
    }
    getData()
  }, [])

  if (!motivation) return null

  return (
    <div>
      {motivation.map(quote => {
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

export default Motivational