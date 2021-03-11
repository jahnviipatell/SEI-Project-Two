import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Power = () => {

  const [power, setPower] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=power&limit=15&page=5')
      setPower(data.data)
    }
    getData()
  }, [])

  if (!power) return null

  return (
    <div className="border">
      <ul>
        {power.map(quote => {
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

export default Power