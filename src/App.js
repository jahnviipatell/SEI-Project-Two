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

function App() {

  const [background, setBackground] = useState([])

  useEffect(() => {
    const getBackgroundData = async () => {
      const response = await axios.get('https://source.unsplash.com/collection/1376954/landscape')
      setBackground(response.config.url)
    }
    getBackgroundData()
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
          <Route>
            <Inspirational />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App
