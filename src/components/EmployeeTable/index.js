import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <tbody>
      {props.employees.map(emp => (
        <tr className="employeeRow">
          <td>
            <img src={emp.picture.medium} alt={`${emp.name.first} ${emp.name.last}`} title={`${emp.name.first} ${emp.name.last}`} />
          </td>
          <td>
            {`${emp.name.first} ${emp.name.last}`}
          </td>
          <td>
            {emp.email}
          </td>
          <td>
            {emp.cell}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeTable;
