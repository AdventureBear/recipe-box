import React, { Component } from 'react'
import './css/IngredientDetail.css'
import edit from './images/edit.png'
import del from './images/delete.png'
import save from './images/save.png'
import back from './images/return.png'

class IngredientDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }
  handleEditClick = () =>{
    this.setState ({
      isEditing: true
    })
  }
  handleInputChange = (event) => {
    console.log('ingredient edited', event.target.value)
  }
  handleBackClick = () => {
    this.setState ({
      isEditing:false
    })
  }
  handleSaveClick = () => {
    console.log('Save Button Clicked, ' + this.refs.ingredient.value)
    let ingredient = this.refs.ingredient.value
    let unit = this.refs.unit.value
    let amount = this.refs.amount.value
    let ingredientObj = {"amount": amount,
      "unit":unit,
      "ingredient":ingredient}
    this.setState({
      isEditing: false
    })
    this.props.saveIngredientList(ingredientObj, this.props.index)
  }
  handleDeleteClick =() => {
    console.log("delete button clicked for: ", this.props.ingredient.ingredient)
    this.props.deleteIngredient(this.props.index)
  }
  render () {
    if (this.state.isEditing) {
      return this.renderEdit()
    } else {
      return this.renderDisplay()
    }
  }

  renderDisplay () {
    return (
      <tr className='component-ingredientdetail'>
        <td className="amt right">{this.props.ingredient.amount}</td>
        <td className="unit">{this.props.ingredient.unit}</td>
        <td className="ing">{this.props.ingredient.ingredient}</td>
        <td className="action"><div className="tooltip"><span className="tooltiptext">Edit</span><img src={edit} onClick={this.handleEditClick} className="edit" alt="edit"/></div></td>
        <td className="action"><div className="tooltip"><span className="tooltiptext">Delete</span><img src={del} onClick={this.handleDeleteClick} className="del" alt="delete"/></div></td>
      </tr>
    )
  }


  renderEdit(){
    return (
              <tr className='component-ingredientdetail'>
                <td className="amt right">
                  <input ref="amount" className="amt" type="text"
                         defaultValue={this.props.ingredient.amount}
                         onChange={this.handleAmtChange} />
                </td>
                <td className="unit">
                  <select  ref="unit" defaultValue={this.props.ingredient.unit}
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
                <td className="ing">
                  <input ref="ingredient" type="text"
                           defaultValue={this.props.ingredient.ingredient}
                           onChange={this.handleInputChange} />
                </td>
                <td className="action">
                  <div className="tooltip">
                    <span className="tooltiptext">Save</span>
                    <img src={save} onClick={this.handleSaveClick} className="save" alt="save"/>
                  </div>
                </td>
                <td className="action">
                  <div className="tooltip">
                    <span className="tooltiptext">Cancel</span>
                    <img src={back} onClick={this.handleBackClick} className="back" alt="back"/>
                  </div>
                </td>
              </tr>
            )}

}
IngredientDetail.propTypes={
  ingredient: React.PropTypes.object,
  saveIngredientList: React.PropTypes.func,
  deleteIngredient: React.PropTypes.func
}

export default IngredientDetail