import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import "./style.css";

function EmployeeList (props) {
    return (
        <div className="employeeTable">
            <table className="table table-hover table-dark">
                <thead>
                   <tr>
                       <th></th>
                       <th>Name <i onClick={props.sortByName} data-col="name.first" class="fas fa-sort"></i></th>
                       {/* add sort by email and phone */}
                       {/* combine name and email as "sortAlphabetically" */}
                       <th>Email <i onClick={props.sortByEmail} data-col="email" class="fas fa-sort"></i></th>
                       <th>Phone <i onClick={props.sortByNumber} class="fas fa-sort"></i></th>
                   </tr> 
                </thead>
                <EmployeeTable employees={props.employees} />
            </table>
        </div>
    );
}

export default EmployeeList;