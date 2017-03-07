import React, { Component } from 'react';
import logo from '../assets/images/logo_with_title.png';
import '../assets/stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Team Builder</h2>
        </div>
        <div className="team-display">
          
        </div>
      </div>
    );
  }
}

export default App;
