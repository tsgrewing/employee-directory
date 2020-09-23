import React from 'react';
import Search from "../Search";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
            <Search  employees={props.employee} handleInputChange={props.handleInputChange} />
        </nav> 
    )
}

export default Nav;