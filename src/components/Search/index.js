import React from "react";

function Search(props) {
    return (
        <form className="search">
            <div className="form-group">
            <label htmlFor="employeeSearch">Search:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                type="text"
                name="employeeSearch"
                className="form-control"
                placeholder="Search by First Name"
                id="search"
            />
            </div>
        </form>
    )
}

export default Search;