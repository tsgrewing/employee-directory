import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Main from "./components/Main";
import Nav from "./components/Nav"


function App() {

  // Map over this.state.employees and render a EmployeeCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title />
        <Nav />
        <Main />
      </Wrapper>
    );
  }
}

export default App;
