import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Inspirational = () => {

  const [inspiration, setInspiration] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=inspirational&limit=15&page=7')
      setInspiration(data.data)
    }
    getData()
  }, [])

  if (!inspiration) return null

  return (
    <div className="border">
      <ul>
        {inspiration.map(quote => {
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

export default Inspirational