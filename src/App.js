import React, { Component } from 'react';
import  Countdown from './Countdown';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var endDate = new Date(new Date().getTime() + 30000);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Countdown date={endDate}> </Countdown>

        </header>
      </div>
    );
  }
}

export default App;
