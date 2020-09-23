import React, {Component} from "react";
import Search from "../Search";
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

    // Combine email and name sorting to a single sortAlphabetically function and use data att to determine what to sort by
    sortByName = (target) => {
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

    sortByEmail = () => {
        const searchedList = this.state.filteredEmployees;
        if (this.state.order === "ascend") {
            const sortedList = searchedList.sort((a, b) => (a.email > b.email) ? 1 : -1)
            this.setState({
                searchedList: sortedList,
                order: "descend"
            })
        }
        else {
            const sortedList = searchedList.sort((a, b) => (a.email > b.email) ? -1 : 1)
            this.setState({
                searchedList: sortedList,
                order: "ascend"            
            })
        };
    };
    
    sortByNumber = () => {
        const searchedList = this.state.filteredEmployees;
        if (this.state.order === "ascend") {
            const sortedList = searchedList.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
            this.setState({
                searchedList: sortedList,
                order: "descend"
            })
        }
        else {
            const sortedList = searchedList.sort((a, b) => (a.phone > b.phone) ? -1 : 1)
            this.setState({
                searchedList: sortedList,
                order: "ascend"            
            })
        };
    };

    // add functionality to allow for searches by first or last name
    handleInputChange = evt => {
        const employees = this.state.employees;
        const searchedName = evt.target.value;
        const filteredEmployees = employees.filter(emp => emp.name.first.toLowerCase().indexOf(searchedName.toLowerCase()) > -1)
        this.setState({filteredEmployees: filteredEmployees})
    }

    render() {
        return (
            <div className="directoryWrapper">
                <Search  handleInputChange={this.handleInputChange} />
                <EmployeeList employees={this.state.filteredEmployees} sortByName={this.sortByName} sortByEmail={this.sortByEmail} sortByNumber={this.sortByNumber} />
            </div>
        )
    }
}

export default EmployeeDirectory;