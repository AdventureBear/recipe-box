import React, { Component } from 'react'
import IngredientList from './IngredientList'
import './RecipeCard.css'

class RecipeCard extends Component {

    renderDisplay() {
        return (
          <div className='component-recipecard'>
              {this.props.recipe.title}
              <button className="button" onClick={this.props.editButtonClick}>Edit</button>
              <IngredientList isEditing={this.props.isEditing} ingredientList={this.props.recipe.ingredientList}  />
              <b>Directions</b>
              <p>{this.props.recipe.instructions}</p>

          </div>
        )
    }

    renderEdit(){
        return (
          <div className='component-recipecard'>
              {this.props.recipe.title}
              <button className="button" onClick={this.props.saveButtonClick}>Save</button>
              <IngredientList isEditing={this.props.isEditing} ingredientList={this.props.recipe.ingredientList}  />
              <b>Directions</b>
              <textarea onChange={this.props.handleInstructionChange} defaultValue={this.props.recipe.instructions}></textarea>

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
