import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  state = {
    employees = {}
  };

  componentDidMount() {
    $.ajax({
      url: 'https://randomuser.me/api/?results=20',
      dataType: 'json',
      success: function(data) {
        console.log(data);
      }
    });
  };

}
export default App;
