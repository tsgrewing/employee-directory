import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Main from "./components/Main";
import Nav from "./components/Nav"


function App() {
    return (
      <Wrapper>
        <Title />
        <Main />
      </Wrapper>
    );
}

export default App;
