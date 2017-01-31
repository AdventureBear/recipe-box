import React, { Component, PropTypes } from 'react'
import IngredientDetail from './IngredientDetail'
import './IngredientList.css'

class IngredientList extends Component {
    constructor(props){
        super(props)
    }

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
    ingredientList: React.PropTypes.array
};

export default IngredientList
