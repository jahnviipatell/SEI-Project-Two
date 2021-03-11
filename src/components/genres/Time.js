import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Time = () => {

  const [time, setTime] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=15&page=9')
      setTime(data.data)
    }
    getData()
  }, [])

  if (!time) return null

  return (
    <div className="border">
      <ul>
        {time.map(quote => {
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

export default Time