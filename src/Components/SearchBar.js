import React from 'react';

const SearchBar = () => {
    
    
    return (
        <div className = "text-center">
            <form className="form-control-sm pb-2">
                <input 
                    type="text"
                    placeholder="Search Characters"
                    className="form-control-sm mr-2"
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