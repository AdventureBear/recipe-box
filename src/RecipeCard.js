import React, { Component } from 'react'
import IngredientList from './IngredientList'
import './RecipeCard.css'

class RecipeCard extends Component {
  constructor(props){
    super(props)
    this.state ={
      show: false,
      idEditing: false
      }
    }
    showRecipe = () => {
      console.log("clicked recipe")
      var showing = !this.state.show
      this.props.titleClicked()
      this.setState({
        show: showing
      })
    }
    editButtonClick = () => {
        console.log("Edit Button Clicked")
        this.setState({
          isEditing: true
        })
    }
    saveButtonClick = (e) => {
      console.log('Save Button Clicked, in Component')
      console.log(this.state.newInstructions)
      this.setState({
        isEditing: false
      })
      this.props.saveInstructions()

    }
    cancelButtonClick = () => {
      console.log('Cancel Button Clicked')
      this.setState({
        isEditing: false
      })
    }
    renderListView() {
      return (
        <div className='component-recipecard' >
          <div className='container' >
            <h2 onClick={this.showRecipe}>{this.props.recipe.title}</h2>
          </div>
        </div>
      )

    }
    renderDisplayView() {
        return (
          <div className='component-recipecard' >
            <div className='container'>
              <h2 onClick={this.showRecipe}>{this.props.recipe.title}</h2>
              <IngredientList isEditing={this.props.isEditing} ingredientList={this.props.recipe.ingredientList}  />
              <h3>Directions</h3>
              <p className='directions'>{this.props.recipe.instructions}</p>
              <button className="button" onClick={this.editButtonClick}>Edit</button>
              <button className="button" onClick={this.props.deleteButtonClick}>Remove</button>

            </div>
          </div>
        )
    }

    renderEdit(){
        return (

            <div className='component-recipecard'>
              <div className='container'>
                <h2>{this.props.recipe.title}</h2>
                 <IngredientList isEditing={this.state.isEditing} ingredientList={this.props.recipe.ingredientList}  />

                <h3>Directions</h3>
                <textarea className='directions' onChange={this.props.handleInstructionChange} defaultValue={this.props.recipe.instructions}></textarea>
                <button className="button" onClick={this.saveButtonClick}>Save</button>
                <button className="button" onClick={this.cancelButtonClick}>Cancel</button>

              </div>
            </div>

        )
    }

    render() {
      if (this.state.show) {
        if (this.state.isEditing) {
          return this.renderEdit()
        } else {
          return this.renderDisplayView()
        }
      } else {
          return this.renderListView()
      }
    }
}

RecipeCard.propTypes = {
    recipe: React.PropTypes.object,
    handleInstructionChange: React.PropTypes.func,
    saveInstructions: React.PropTypes.func,
    updateInstr: React.PropTypes.func,
    deleteButtonClick: React.PropTypes.func,
    handleUnitChange: React.PropTypes.func,
    handleAmtChange:React.PropTypes.func,
    handleIngredientChange: React.PropTypes.func,
    titleClicked: React.PropTypes.func,
    newInstructions: React.PropTypes.obj
};
export default RecipeCard
