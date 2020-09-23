import React from "react";

function Search(props) {
    return (
        <form className="search text-center">
            <div className="form-group">
            <label htmlFor="employeeSearch" className="h4">Search:</label>
            <input
                onChange={props.handleInputChange}
                type="text"
                name="employeeSearch"
                className="form-control"
                placeholder="Search by First Name"
                id="search"
            />
            </div>
        </form >
    )
}

export default Search;