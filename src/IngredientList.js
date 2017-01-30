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
                <h1>IngredientList</h1>
                <IngredientDetail />
            </div>
        )
    }
}

IngredientList.propTypes = {

};

export default IngredientList
