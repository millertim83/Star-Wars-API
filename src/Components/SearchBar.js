import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className = "text-center">
            <form className="form-control-sm pb-2" 
            onSubmit = {(e) => props.executeSearch(e.target.value)}>
                <input 
                    value={searchInput}
                    type="text"
                    placeholder="Search Characters"
                    className="form-control-sm mr-2"
                    //onChange = {(e) => setSearchInput(e.target.value)}
                >
                </input>
                <button type="submit" className="btn btn-warning ml-100">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;


//below is search url - after equals we want to add user's input
//https://swapi.dev/api/people/?search=