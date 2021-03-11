import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Friendship = () => {

  const [friendship, setFriendship] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes?genre=friendship&limit=15&page=1')
      setFriendship(data.data)
    }
    getData()
  }, [])

  if (!friendship) return null

  return (
    <div className="border">
      <ul>
        {friendship.map(quote => {
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

export default Friendship