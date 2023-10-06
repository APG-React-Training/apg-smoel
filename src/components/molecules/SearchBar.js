/// IMPORT!!

import SearchField from "../atoms/SearchField"
import Button from "../atoms/Button"

const SearchBar = () => {

    return(
        <div className="SearchBar">
            <SearchField value={ 'een' } />
            <Button text="Reset" />
        </div>
    )

}


export default SearchBar