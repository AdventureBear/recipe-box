import React, { Component } from 'react';
import RecipeBox from './RecipeBox'
import logo from './frying_pan.png';
import './App.css';




class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your Recipe Box</h2>
        </div>
        <div className="App-intro">

          <RecipeBox  />

        </div>
      </div>
    )
  }
}

export default App
