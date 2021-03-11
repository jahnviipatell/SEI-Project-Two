import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Science = () => {

  const [science, setScience] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=science&limit=15&page=1')
      setScience(data.data)
    }
    getData()
  }, [])

  if (!science) return null

  return (
    <div className="border">
      <ul>
        {science.map(quote => {
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

export default Science