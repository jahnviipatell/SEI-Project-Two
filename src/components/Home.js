import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Home = () => {
  //! Background
  const [background, setBackground] = useState([])
  const [quote, setQuotes] = useState('')

  useEffect(() => {
    const getBackgroundData = async () => {
      const response = await axios.get('https://source.unsplash.com/collection/1376954/landscape')
      setBackground(response)
    }
    getBackgroundData()
  }, [])

  //! Quotes
  useEffect(() => {
    const urlArray = ['https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=100']
    const getRandomQuote = async () => {
      const { data } = await axios.get(urlArray[Math.floor(Math.random() * urlArray.length - 1)])
      setQuotes(data.data[1])
      console.log(data.data[Math.floor(Math.random() * data.data.length - 1)])
    }
    getRandomQuote()
  }, [])


  return (

    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <p>{quote.quoteText}</p>
      <p>{quote.quoteAuthor}</p>
    </div >

  )
}

export default Home
