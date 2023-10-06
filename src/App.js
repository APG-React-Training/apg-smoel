
import { useEffect, useState }  from 'react'

import "./resources/styles/main.css"
import fetchData from './lib/API'
import Overview from './components/pages/Overview'

const App = () => {
  
  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect( () => {
    fetchData()
    .then( result => {
      setData(result)
      setLoaded(true)
    })
  }, [])

  return (
    <div>
      { isLoaded && <Overview />}
    </div>
  )
}

export default App
