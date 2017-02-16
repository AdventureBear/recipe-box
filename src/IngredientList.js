import React, { Component } from 'react'
import IngredientDetail from './IngredientDetail'
import './IngredientList.css'

class IngredientList extends Component {


    render(){
        return (
            <div className='component-ingredientlist'>
                <h3>Ingredients</h3>
                <IngredientDetail
                  isEditing={this.props.isEditing}
                  ingredientList={this.props.ingredientList}
                  handleUnitChange={this.props.handleUnitChange}
                  handleAmtChange={this.props.handleAmtChange}
                  handleIngredientChange={this.props.handleIngredientChange}
                />
            </div>
        )
    }
}

IngredientList.propTypes = {
    ingredientList: React.PropTypes.array,
    isEditing: React.PropTypes.bool,
    handleUnitChange: React.PropTypes.func,
    handleAmtChange:React.PropTypes.func,
    handleIngredientChange: React.PropTypes.func
}

export default IngredientList
