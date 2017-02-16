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
        console.log('search input changed to:', event.target.value)
        console.log(filterRecipes(event.target.value))
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
        this.setState({
            editing: false
        })
    }
    removeRecipe = (i) => {
        console.log('Delete Button Clicked' + i)
        console.log("Removing Recipe: " +i);
        var arr=this.state.filteredRecipes
        arr.splice(i, 1)
        this.setState({
            filteredRecipes: arr
        })
    }
    updateInstructions = (newInstr, i) => {
        console.log('Updating instructions: ' + i )
        var arr=this.state.filteredRecipes
        arr[i].instructions = newInstr
        this.setState({
            filteredRecipes: arr
        })
    }

    render(){
        return (
            <div className='component-recipebox'>
                <Header
                  textChange={this.handleSearchChange}
                />

                <RecipeList
                  isEditing={this.state.editing}
                  recipies={this.state.filteredRecipes}
                  updateInstr={this.updateInstructions}
                  deleteButtonClick={this.removeRecipe}
                  saveButtonClick={this.saveButtonClick}
                  editButtonClick={this.editButtonClick}
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
