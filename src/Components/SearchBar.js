import React from 'react';

const SearchBar = (props) => {
   
    return (
        <div className = "text-center">
            <form className="text-center form-control-sm pb-2 col-6 d-flex justify-content-center align-items-center container-sm border border-dark" 
                onSubmit = {props.handleSearch}>
                <input 
                    required
                    value = {props.searchTerm}
                    type = "text"
                    placeholder = "Search Characters"
                    className = "form-control-sm mr-2 mt-2"
                    onChange = {props.handleChange}
                >
                </input>
                <button type = "submit" className = "btn btn-warning mr-2 ml-2 mt-2">Search</button>
                <button type = "button" className = "btn btn-danger ml-2 mt-2" onClick = {props.clearSearch}>Clear Search</button>
            </form>
        </div>
    )
}

export default SearchBar;


