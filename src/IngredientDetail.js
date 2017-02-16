import React, { Component } from 'react'
import './IngredientDetail.css'

class IngredientDetail extends Component {
    renderDisplay(){
        return (
            <div className='component-ingredientdetail'>
                <table>
                    <tbody>
                        <tr>
                            <th>Amt</th>
                            <th>Unit</th>
                            <th>Ingredient</th>
                        </tr>
                    {this.props.ingredientList.map((ingredient, i)=>{
                        return (
                          <tr key={i}>
                            <td>{ingredient.amount}</td>
                            <td>{ingredient.unit}</td>
                            <td>{ingredient.ingredient}</td>
                          </tr>
                        )}
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

    renderEdit(){
        return (
          <div className='component-ingredientdetail'>
              <table>
                  <tbody>
                  <tr>
                      <th>Amt</th>
                      <th>Unit</th>
                      <th>Ingredient</th>
                      <th>Actions</th>
                  </tr>

                  {this.props.ingredientList.map((ingredient, i)=>{
                      return (
                    <tr key={i}>
                      <td><input type="text"
                                 placeholder={ingredient.amount}
                                 onChange={this.props.handleAmtChange} /></td>
                        <td><select  defaultValue={ingredient.unit}
                                     onChange={this.props.handleUnitChange} >
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
                        </td>
                        <td><input type="text"
                                   placeholder={ingredient.ingredient}
                                   onChange={this.props.handleIngredientChange}/>
                        </td>
                        <td>-</td>
                        </tr>
                      )
                  })}

                    <tr>
                        <td><input type="text"
                                   placeholder="Amt"
                                   onChange={this.props.handleAmtChange} />
                        </td>
                        <td><select onChange={this.props.handleUnitChange}>
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
                        </td>
                        <td>
                            <input type="text"
                                   onChange={this.props.handleIngredientChange} />
                        </td>
                        <td>+</td>

                    </tr>
                  </tbody>
              </table>
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
    isEditing: React.PropTypes.bool,
    handleUnitChange: React.PropTypes.func,
    handleAmtChange:React.PropTypes.func,
    handleIngredientChange: React.PropTypes.func
};

export default IngredientDetail