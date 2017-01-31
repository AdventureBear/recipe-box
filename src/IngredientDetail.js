import React, { Component, PropTypes } from 'react'
import './IngredientDetail.css'

class IngredientDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-ingredientdetail'>
                <ul>
                {this.props.ingredientList.map((ingredient, i)=>{
                   return <li key={i}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                })}
                </ul>
            </div>
        )
    }
}

IngredientDetail.propTypes = {
    ingredientList: React.PropTypes.array
};

export default IngredientDetail