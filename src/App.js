import "./resources/styles/main.css"
import SearchBar from "./components/molecules/SearchBar"
import ListItem from "./components/molecules/ListItem"
import List from "./components/organism/List"

const App = () => {

  const data = [{
    firstname: 'Rene',
    lastname: 'Krewinkel',
    email: 'rene@krewinkel.nl',
    phone: '0651840813'
  }
]

  const p = {
    data: data
  }

  return (
    <div>
      <List people={ p } />
    </div>
  )
}

export default App
