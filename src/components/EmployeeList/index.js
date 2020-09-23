import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import "./style.css";

function EmployeeList (props) {
    return (
        <div className="employeeTable">
            <table className="table table-hover">
                <thead>
                   <tr>
                       <th></th>
                       <th>Name<i onClick={props.sortByName} class="fas fa-sort"></i></th>
                       {/* add sort by email and phone */}
                       <th>Email</th>
                       <th>Phone</th>
                   </tr> 
                </thead>
                <EmployeeTable employees={props.employees} />
            </table>
        </div>
    );
}

export default EmployeeList;