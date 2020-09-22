import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Main from "./components/main";


function App() {

  // Map over this.state.employees and render a EmployeeCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title />
        <Main />
      </Wrapper>
    );
  }
}

export default App;
