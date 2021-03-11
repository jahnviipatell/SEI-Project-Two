import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Patience = () => {

  const [patience, setPatience] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=patience&limit=15&page=1')
      setPatience(data.data)
    }
    getData()
  }, [])

  if (!patience) return null

  return (
    <div className="border">
      <ul>
        {patience.map(quote => {
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

export default Patience