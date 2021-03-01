import React from "react";

function Search( {search, handleInputChange} ) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <form className="form-inline">
                <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={handleInputChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Search;