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
              <form className="form-style">
              <ul >
                  <li><span className="bold right two">Amt</span>&nbsp; <span className="bold left one">Unit</span>&nbsp; <span className="bold left four">Ingredient</span></li>

                      {this.props.ingredientList.map((ingredient, i)=>{
                          return (
                          <li key={i}>
                          <span><input type="text" placeholder={ingredient.amount}/></span>
                            <span><select >
                                <option value="" disabled selected hidden>{ingredient.unit}</option>
                                <option value="teaspoon">tsp</option>
                                <option value="tbsp">tbsp</option>
                                <option value="lb">lb</option>
                                <option value="cup">cup</option>
                                <option value="oz">oz</option>
                                <option value="quart">quart</option>
                                <option value="gallon">gallon</option>
                                <option value="lb">lb</option>
                                <option value="ml">ml</option>
                                <option value="gm">gm</option>
                                <option value="liter">liter</option>
                                <option value="whole">whole</option>
                                <option value="stick">stick</option>
                                <option value="large">large</option>
                                <option value="med">med</option>
                                <option value="small">small</option>
                                <option value="clove">clove</option>
                                <option value="pinch">pinch</option>
                                <option value="dash">dash</option>
                                <option value="small">small</option>
                            </select>
                            </span>
                          <span><input type="text" placeholder={ingredient.ingredient} /></span></li>
                          )
                      })}

                    <li><span><input className="right two" type="text" placeholder="Amt"/></span>
                    <span><select className="field-select two">
                        <option value="teaspoon">tsp</option>
                        <option value="tbsp">tbsp</option>
                        <option value="lb">lb</option>
                        <option value="cup">cup</option>
                        <option value="oz">oz</option>
                        <option value="quart">quart</option>
                        <option value="gallon">gallon</option>
                        <option value="lb">lb</option>
                        <option value="ml">ml</option>
                        <option value="gm">gm</option>
                        <option value="liter">liter</option>
                        <option value="whole">whole</option>
                        <option value="stick">stick</option>
                        <option value="large">large</option>
                        <option value="med">med</option>
                        <option value="small">small</option>
                        <option value="clove">clove</option>
                        <option value="pinch">pinch</option>
                        <option value="dash">dash</option>
                        <option value="small">small</option>
                        </select></span>
                        <span className="left six"><input type="text"/></span></li>
              </ul>
              </form>
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