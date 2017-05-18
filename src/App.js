import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import EmailVerifier from './EmailVerifier';
import Exchange from './Exchange';

class App extends Component {

  render() {
    return (
      <div className="App">
       
      <Clock/>
      <EmailVerifier/>
      <Exchange/>
      </div>
    );
  }
}

export default App;
