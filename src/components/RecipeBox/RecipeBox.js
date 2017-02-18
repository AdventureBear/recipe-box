import React, { Component } from 'react'
import Header from '../Header/Header'
import RecipeList from '../RecipeList/RecipeList'
import Footer from '../Footer/Footer'
import './RecipeBox.css'
import recipeData from '../../utils/recipeData.json'
import filterRecipes from '../../utils/filterRecipes.js'

class RecipeBox extends Component {
    constructor(props){
        super(props)
        this.state ={
            filteredRecipes: recipeData,
            newInstructions: ""
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
            newInstructions: event.target.value
        })
    }

    titleClicked =(i) => {
        console.log('Title Clicked ' + i)

    }
    /*
    editButtonClick = () => {
        console.log('Edit Button Clicked')
        this.setState({
            editing: true
        })
    }
    */
    /*saveButtonClick = (event) => {
        console.log('Save Button Clicked, Recipe Box component')
        this.setState({
            editing: false

        })
    }
*/
    /*cancelButtonClick = () => {
        console.log('Cancel Button Clicked')
        this.setState({
            editing: false
        })
    }*/

    removeRecipe = (i) => {
        console.log('Delete Button Clicked' + i)
        console.log("Removing Recipe: " +i);
        var arr=this.state.filteredRecipes
        arr.splice(i, 1)
        this.setState({
            filteredRecipes: arr
        })
    }
    saveInstructions = (i) => {
        console.log("in app, "+ i)
        var arr=this.state.filteredRecipes
        console.log(arr[1].instructions)
        console.log("Saving Instructions??")
        this.setState({
            isEditing: false,
            filteredRecipes: arr,
            newInstructions: ""
        })

    }

    render(){
        return (
            <div className='component-recipebox'>
                <Header
                  textChange={this.handleSearchChange}
                />

                <RecipeList
                  handleInstructionChange={this.handleInstructionChange}
                  isEditing={this.state.editing}
                  recipies={this.state.filteredRecipes}
                  titleClicked={this.titleClicked}
                  updateInstr={this.updateInstructions}
                  deleteButtonClick={this.removeRecipe}
                  saveInstructions={this.saveInstructions}
                  saveButtonClick={this.saveButtonClick}
                  cancelButtonClick={this.cancelButtonClick}
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
