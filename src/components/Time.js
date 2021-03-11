import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Time = () => {

  const [time, setTime] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=15')
      setTime(data.data)
    }
    getData()
  }, [])

  if (!time) return null

  return (
    <div>
      {time.map(quote => {
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

export default Time