import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import "./style.css";

function CardList (props) {
    return (
        <div className="row">
            {props.results.map(employee => (
                <EmployeeCard
                    id={employee.id}
                    key={employee.id}
                    name={employee.name}
                    image={employee.image}
                    phone={employee.phone}
                    email={employee.email}
                />
            ))}
        </div>
    )
}

export default CardList;