import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Motivational from './components/genres/Motivational'
import Happiness from './components/genres/Happiness'
import Time from './components/genres/Time'
import GenreIndex from './components/GenreIndex'
import Inspirational from './components/genres/Inspirational'
import Success from './components/genres/Success'
import Power from './components/genres/Power'
import Science from './components/genres/Science'
import Patience from './components/genres/Patience'
import Friendship from './components/genres/Friendship'

function App() {

  const [background, setBackground] = useState('https://source.unsplash.com/collection/1376954/landscape')
  const API_KEY = 'Nj9fZ3kaT5ScBE7kA82DaVtgydjq6Sux7ddoHHR_DsE'

  useEffect(() => {
    // setInterval(() => {
    const getBackgroundData = async () => {
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&collections=1376954`)
      setBackground(response.data.urls.raw)
      console.log(response)
    }
    getBackgroundData()
    // }, 30000)

  }, [])

  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter className="whole-screen">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/motivational">
            <Motivational />
          </Route>
          <Route exact path="/happiness">
            <Happiness />
          </Route>
          <Route exact path="/time">
            <Time />
          </Route>
          <Route path="/genreIndex">
            <GenreIndex />
          </Route>
          <Route path="/inspirational">
            <Inspirational />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/power">
            <Power />
          </Route>
          <Route path="/science">
            <Science />
          </Route>
          <Route path="/patience">
            <Patience />
          </Route>
          <Route path="/friendship">
            <Friendship />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App
