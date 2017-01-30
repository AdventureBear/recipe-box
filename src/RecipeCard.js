import React, { Component, PropTypes } from 'react'
import RecipeActions from './RecipeActions'
import IngredientList from './IngredientList'
import Instructions from './Instructions'
import './RecipeCard.css'

class RecipeCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-recipecard'>
                <h1>RecipeCard</h1>
                <RecipeActions />
                <IngredientList />
                <Instructions />
            </div>
        )
    }
}

RecipeCard.propTypes = {

};

export default RecipeCard
