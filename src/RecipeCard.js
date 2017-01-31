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
                {this.props.recipe.title}

                <RecipeActions />
                <IngredientList ingredientList={this.props.recipe.ingredientList}  />
                <Instructions instructions={this.props.recipe.instructions} />
            </div>
        )
    }
}

RecipeCard.propTypes = {
    recipe: React.PropTypes.object
};

export default RecipeCard
