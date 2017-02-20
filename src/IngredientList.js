import React, { Component } from 'react'
import IngredientDetail from './IngredientDetail'
import './css/IngredientList.css'
import edit from './images/edit.png'
import del from './images/delete.png'

class IngredientList extends Component {
          constructor(props){
            super(props)
             this.state ={
               isEditing: false
              }
          }
          handleEditClick = () =>{
            this.setState ({
              isEditing: true
            })
          }

  
          renderDisplay(){
              return (

              <div className='component-ingredientdetail'>

                <h3>Ingredients</h3>
                <table>
                <tbody>
                  <tr>
                  <th className="right">Amt</th>
                  <th>Unit</th>
                  <th>Ingredient</th>
                  </tr>
            {this.props.ingredientList.map((ingredient, i)=>{
                return (
                  <tr key={i}>
                    <td className="right">{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                    <td>{ingredient.ingredient}</td>
                    <td><img src={edit} onClick={this.handleEditClick} className="edit" alt="edit" /></td>
                    <td><img src={del} className="del" alt="delete" /></td>
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
                <h3>Ingredients</h3>
              <table>
              <tbody>
              <tr>
              <th className="right">Amt</th>
              <th>Unit</th>
              <th>Ingredient</th>
              <th></th>
              </tr>

              {this.props.ingredientList.map((ingredient, i)=>{
                return (
                  <tr key={i}>
                    <td className="right">
                      <input className="skinny" type="text"
                             defaultValue={ingredient.amount}
                             onChange={this.handleAmtChange} />
                    </td>
                    <td>
                      <select  defaultValue={ingredient.unit}
                                 onChange={this.handleUnitChange} >
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
                               defaultValue={ingredient.ingredient}
                               onChange={this.handleIngredientChange} />
                    </td>
                    <td className="i i-delete">x</td>
                  </tr>
                )
              })}

              <tr>
              <td className="right">
              <input  className="skinny"
              type="text"
              placeholder="Amt"
              onChange={this.handleAmtChange} />
              </td>
                <td><select onChange={this.handleUnitChange}>
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
              placeholder="ingredient"
              onChange={this.handleIngredientChange} />
              </td>
              <td className="i i-add">+</td>

              </tr>
              </tbody>
              </table>
              </div>
              )
            }

        render(){
          if (this.state.isEditing){
          return this.renderEdit()
        } else {
          return this.renderDisplay()
        }
        }




}

IngredientList.propTypes = {
    ingredientList: React.PropTypes.array
}



export default IngredientList

/* to implement
 handleUnitChange: React.PropTypes.func,
 handleAmtChange:React.PropTypes.func,
 handleIngredientChange: React.PropTypes.func
 */