import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Motivational from './components/Motivational'
import Happiness from './components/Happiness'
import Time from './components/Time'

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
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App
