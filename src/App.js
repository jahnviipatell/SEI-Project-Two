import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import axios from 'axios'

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
      <h1>Hello World</h1>
      <Home />
    </div>
  )


}

export default App
