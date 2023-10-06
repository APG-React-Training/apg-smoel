/// IMPORT!!
import { useState, useContext} from 'react'
import SearchField from "../atoms/SearchField"
import Button from "../atoms/Button"

import DataContext from "../../context/DataContext"

const SearchBar = () => {

    const [value, setValue] = useState('')
    const c = useContext(DataContext)

    const reset = () => {
        setValue('')
        c.resetFilter()
    }

    const inputHandler = (e) => {
        const input = e.target.value
        setValue(input)
        c.filterPersons(input)
    }

    return(
        <div className="SearchBar">
            <SearchField value={ value } handler={ inputHandler } />
            <Button text="Reset" handler={ reset } />
        </div>
    )

}


export default SearchBar