import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Home = () => {
  //! Background
  const [quotes, setQuotes] = useState('')

  //! Quotes
  useEffect(() => {
    const urlArray = ['https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=100']
    const randomArray = urlArray[Math.floor(Math.random() * urlArray.length)]
    const getRandomQuote = async () => {
      const { data } = await axios.get(randomArray)
      const randomNumber = Math.floor(Math.random() * data.data.length)
      setQuotes(data.data[randomNumber])
    }
    getRandomQuote()

  }, [])



  return (

    <div className="background">
      <div className="quote-container">
        <h1>Quote Garden</h1>
        <div className="quote-text">
          <p>{quotes.quoteText}</p>
        </div>
        <div className="quote-author">
          <p>~ {quotes.quoteAuthor}</p>
        </div>
      </div>
    </div >
  )
}

export default Home
