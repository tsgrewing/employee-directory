import React, {Component} from "react";
import Nav from "../Nav";
import EmployeeList from "../EmployeeList";
import API from "../../utils/API";



class EmployeeDirectory extends Component {
    state= {
        search: "",
        employees: [],
        order: "",
        filteredEmployees: []
    }

    componentDidMount() {
        API.getEmployees().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            });
        });
    };

    sortByName = () => {
        const searchedList = this.state.filteredEmployees;
        if (this.state.order === "ascend") {
            const sortedList = searchedList.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                searchedList: sortedList,
                order: "descend"
            })
        }
        else {
            const sortedList = searchedList.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                searchedList: sortedList,
                order: "ascend"            
            })
        };
    };

    handleInputChange = evt => {
        const employees = this.state.employees;
        const searchedName = evt.target.value;
        const filteredEmployees = employees.filter(emp => emp.name.first.toLowerCase().indexOf(searchedName.toLowerCase()) > -1)
        this.setState({filteredEmployees: filteredEmployees})
    }

    render() {
        return (
            <div>
                <Nav employee={this.state.filteredEmployees} handleInputChange={this.handleInputChange} />
                <EmployeeList employees={this.state.filteredEmployees} sortName={this.sortByName} />
            </div>
        )
    }
}

export default EmployeeDirectory;