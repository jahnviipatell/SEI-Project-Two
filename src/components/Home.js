import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Home = () => {
  //! Background
  // const [background, setBackground] = useState([])
  const [quotes, setQuotes] = useState('')

  // useEffect(() => {
  //   const getBackgroundData = async () => {
  //     const response = await axios.get('https://source.unsplash.com/collection/1376954/landscape')
  //     setBackground(response)
  //   }
  //   getBackgroundData()
  // }, [])

  //! Quotes
  useEffect(() => {
    const urlArray = ['https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=100']
    const randomArray = urlArray[Math.floor(Math.random() * urlArray.length)]
    const getRandomQuote = async () => {
      const { data } = await axios.get(randomArray)
      const randomNumber = Math.floor(Math.random() * data.data.length)
      setQuotes(data.data[randomNumber])
      // console.log(data.data[Math.floor(Math.random() * data.data.length)])
    }
    getRandomQuote()

  }, [])



  return (

    <div className="background">
      <div className="quote-text">
        <p>{quotes.quoteText}</p>
      </div>
      <div className="quote-author">
        <p>{quotes.quoteAuthor}</p>
      </div>
    </div >

  )
}

export default Home
