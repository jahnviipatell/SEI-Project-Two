import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './components/Home'
import GenreIndex from './components/GenreIndex'
import QuotePage from './components/QuotePage'


function App() {

  const API_KEY = 'Nj9fZ3kaT5ScBE7kA82DaVtgydjq6Sux7ddoHHR_DsE'
  const [background, setBackground] = useState(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&collections=1376954`)

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
          <Route path="/genres">
            <GenreIndex />
          </Route>
          <Route path="/:genre">
            <QuotePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App
