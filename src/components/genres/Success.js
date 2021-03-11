import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Success = () => {

  const [success, setSuccess] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=success&limit=15&page=1')
      setSuccess(data.data)
    }
    getData()
  }, [])

  if (!success) return null

  return (
    <div className="border">
      <ul>
        {success.map(quote => {
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

export default Success