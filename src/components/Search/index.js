import React from "react";
import "./style.css"

function Search(props) {
    return (
        <form className="search text-center">
            <div className="form-group">
            <label htmlFor="employeeSearch" className="h4">Search:</label>
            <input
                onChange={props.handleInputChange}
                type="text"
                name="employeeSearch"
                className="form-control text-center"
                placeholder="Search by First Name"
                id="search"
                onSubmit={(e)=>(e.preventDefault)}
            />
            </div>
        </form >
    )
}

export default Search;