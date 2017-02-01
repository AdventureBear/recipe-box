import React, { Component } from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import Footer from './Footer'
import './RecipeBox.css'
import recipeData from './recipeData.json'
import filterRecipes from './js/filterRecipes.js'

class RecipeBox extends Component {
    constructor(props){
        super(props)
        this.state ={
            filteredRecipes: recipeData,
            editing: false
        }
    }
    handleSearchChange = (event) => {
        console.log('search input changed to:', event.target.value);
        this.setState({
            filteredRecipes: filterRecipes(event.target.value)
        })
    }

    handleInstructionChange = (event) => {
        console.log('instructions edited', event.target.value)
        this.setState({
            instructions: event.target.value
        })
    }

    editButtonClick = () => {
        console.log('Edit Button Clicked')
        this.setState({
            editing: true
        })
    }
    saveButtonClick = () => {
        console.log('Save Button Clicked')
        console.log('New Instructions', this.state.instructions)
        this.setState({
            editing: false
        })
    }

    render(){
        return (
            <div className='component-recipebox'>
                <Header textChange={this.handleSearchChange} />
                <RecipeList   isEditing={this.state.editing} recipeData={this.state.filteredRecipes} saveButtonClick={this.saveButtonClick} editButtonClick={this.editButtonClick}
                  />
                <Footer />
            </div>
        )
    }
}

RecipeBox.propTypes = {
    recipeData: React.PropTypes.array
};

export default RecipeBox
