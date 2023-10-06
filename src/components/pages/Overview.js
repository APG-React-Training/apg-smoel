import { useContext  } from "react"
import SearchBar from "../molecules/SearchBar"
import List from "../organism/List"

import DataContext from "../../context/DataContext"

const Overview = () => {

    const c = useContext(DataContext)

    return(
        <div className="Overview">
            <SearchBar />
            <List people={ c.filterData } />
        </div>
    )
}

export default Overview