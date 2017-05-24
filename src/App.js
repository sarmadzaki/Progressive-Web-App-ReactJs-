import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import Items from './components/items.js'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Items />
      </div>
    );
  }
}

export default App;
