import React, { Component } from 'react'
import './IngredientDetail.css'

class IngredientDetail extends Component {
    renderDisplay(){
        return (
            <div className='component-ingredientdetail'>
                <ul><li><span className="bold right two">Amt</span>&nbsp; <span className="bold left one">Unit</span>&nbsp; <span className="bold left four">Ingredient</span></li>


                {this.props.ingredientList.map((ingredient, i)=>{
                   return <li key={i}><span className="right two">{ingredient.amount}</span>&nbsp; <span className="left one">{ingredient.unit}</span>&nbsp; <span className="left four">{ingredient.ingredient}</span></li>
                })}
                </ul>
            </div>
        )
    }

    renderEdit(){
        return (
          <div className='component-ingredientdetail'>
              <ul>
                  <li><span className="bold right two">Amt</span>&nbsp; <span className="bold left one">Unit</span>&nbsp; <span className="bold left four">Ingredient</span></li>

                      {this.props.ingredientList.map((ingredient, i)=>{
                      return <li key={i}><span className="right two">{ingredient.amount}</span>&nbsp; <span className="left one">{ingredient.unit}</span>&nbsp; <span className="left four">{ingredient.ingredient}</span></li>
                  })}
                    <li><input className="right two" type="text"/><input className="left one" type="text"/><input className="left four" type="text"/></li>
              </ul>
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

IngredientDetail.propTypes = {
    ingredientList: React.PropTypes.array,
    isEditing: React.PropTypes.bool
};

export default IngredientDetail