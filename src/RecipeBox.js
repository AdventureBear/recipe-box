import React, { Component } from 'react'
import Header from './Header'
import RecipeCard from './RecipeCard'
import Footer from './Footer'
import './css/RecipeBox.css'
import recipeData from './recipeData.json'
import filterRecipes from './js/filterRecipes.js'

class RecipeBox extends Component {
    constructor(props){
        super(props)
        this.state ={
            filteredRecipes: recipeData
        }
    }
    handleSearchChange = (event) => {
        console.log('search input changed to:', event.target.value)
        console.log(filterRecipes(event.target.value))
        this.setState({
            filteredRecipes: filterRecipes(event.target.value)

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

    render(){
        return (
            <div className='component-recipebox'>
                <Header
                  textChange={this.handleSearchChange}
                />

                {recipeData.map((recipe, i)=>{
                    return (
                      <RecipeCard
                        key={i}
                        index={i}
                        recipe={recipe}
                        isEditing={this.props.isEditing}
                        handleInstructionChange={this.handleInstructionChange}
                        saveInstructions={this.saveInstructions}
                        deleteButtonClick={this.removeRecipe}
                        />
                    )
                })}

                <Footer />
            </div>
        )
    }
}



export default RecipeBox
