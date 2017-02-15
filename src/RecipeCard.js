import React, { Component } from 'react'
import IngredientList from './IngredientList'
import './RecipeCard.css'

class RecipeCard extends Component {

    renderDisplay() {
        return (
          <div className='component-recipecard'>
            <div className='container'>
              <h2>{this.props.recipe.title}</h2>
              <IngredientList isEditing={this.props.isEditing} ingredientList={this.props.recipe.ingredientList}  />
              <h3>Directions</h3>
              <p className='directions'>{this.props.recipe.instructions}</p>
              <button className="button" onClick={this.props.editButtonClick}>Edit</button>

            </div>
          </div>
        )
    }

    renderEdit(){
        return (

            <div className='component-recipecard'>
              <div className='container'>
                <h2>{this.props.recipe.title}</h2>
                 <IngredientList isEditing={this.props.isEditing} ingredientList={this.props.recipe.ingredientList}  />

                <h3>Directions</h3>
                <textarea className='directions' onChange={this.props.handleInstructionChange} defaultValue={this.props.recipe.instructions}></textarea>
                <button className="button" onClick={this.props.saveButtonClick}>Save</button>

              </div>
            </div>

        )
    }

    render(){
            if (this.props.isEditing){
                return this.renderEdit()
            } else {
                return this.renderDisplay()
            }
    }
}

RecipeCard.propTypes = {
    recipe: React.PropTypes.object,
    editButtonClick: React.PropTypes.func,
    saveButtonClick: React.PropTypes.func,
    isEditing: React.PropTypes.bool,
    handleInstructionChange: React.PropTypes.bool
}
export default RecipeCard
