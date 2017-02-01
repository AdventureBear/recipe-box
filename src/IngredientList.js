import React, { Component } from 'react'
import IngredientDetail from './IngredientDetail'
import './IngredientList.css'

class IngredientList extends Component {


    render(){
        return (
            <div className='component-ingredientlist'>
                <b>Ingredients</b>
                <IngredientDetail ingredientList={this.props.ingredientList} />
            </div>
        )
    }
}

IngredientList.propTypes = {
    ingredientList: React.PropTypes.array,
    isEditing: React.PropTypes.bool
};

export default IngredientList
