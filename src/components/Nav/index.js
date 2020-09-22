import React from 'react';
import "./style.css";

function Nav(props) {
    return (
        <nav>
            <form className="search">
                <label htmlFor="employeeSearch">Search:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    name="employeeSearch"
                    className="form-control"
                    placeholder="Search for Employee"
                    id="search"
                />
            </form>

        </nav> 
    )
}

export default Nav;