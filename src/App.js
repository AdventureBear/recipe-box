import React, { Component } from 'react';
import RecipeBox from './RecipeBox'
import logo from './frying_pan.png';
import './App.css';
import recipeData from './recipeData.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      filteredRecipes: recipeData
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your Recipe Box</h2>
        </div>
        <div className="App-intro">
          <RecipeBox recipeData={this.state.filteredRecipes}
            />
        </div>
      </div>
    );
  }
}

export default App;
