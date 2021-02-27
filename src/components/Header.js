import React from "react";
import Search from "./Search";

function Header({search, handleInputChange}) {
    return (
    <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">By utilizing the randomuser.me API, we are able to demonstrate the fucntionality of a React based employee directory application.  </p>
        <hr className="my-4"/>
        <p>Search through a random assortment of 25 'employees' by first and last name.  Refresh the page to get a new employee set.</p>
        <Search search={search} handleInputChange={handleInputChange} />
    </div>
    )
}

export default Header;