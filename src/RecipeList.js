import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import './RecipeList.css'

class RecipeList extends Component {

    render(){
        return (
            <div className='component-recipelist'>
                <h1>RecipeList</h1>

                {this.props.recipies.map((recipe, i)=>{
                    return (
                      <RecipeCard
                        key={i}
                        index={i}
                        recipe={recipe}
                        titleClicked={this.props.titleClicked}
                        updateInstr={this.updateInstructions}
                        deleteButtonClick={this.props.deleteButtonClick}
                        handleInstructionChange={this.props.handleInstructionChange}
                        isEditing={this.props.isEditing}
                        saveButtonClick={this.props.saveButtonClick}
                        cancelButtonClick={this.props.cancelButtonClick}
                        editButtonClick={this.props.editButtonClick}
                        saveInstructions={this.props.saveInstructions} />
                    )
                })}

            </div>
        )
    }
}

RecipeList.propTypes={

    recipies: React.PropTypes.array,
    editButtonClick: React.PropTypes.func,
    saveButtonClick: React.PropTypes.func,
    cancelButtonClick: React.PropTypes.func,
    deleteButtonClick: React.PropTypes.func,
    isEditing: React.PropTypes.bool,
    handleInstructionChange: React.PropTypes.func,
    updateInstr: React.PropTypes.func,
    titleClicked: React.PropTypes.func,
    saveInstructions: React.PropTypes.func
}

export default RecipeList
