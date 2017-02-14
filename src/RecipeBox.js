import React, { Component, PropTypes } from 'react'
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
    editButtonClick = (event) => {
        console.log('Edit Button Clicked')
    }
    render(){
        return (
            <div className='component-recipebox'>
                <Header textChange={this.handleSearchChange} />
                <RecipeList   recipies={this.state.filteredRecipes} editButtonClick={this.editButtonClick}
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
