import React, { Component } from 'react'
import IngredientDetail from './IngredientDetail'
import './css/IngredientList.css'


class IngredientList extends Component {
          constructor(props){
            super(props)
             this.state ={
               isEditing: false
              }
          }
          saveRecipe = (newIng, i) => {
            console.log("Save Button Clicked in ingredients")

          }

        render() {
          return (
            <div>
              <h3>Ingredients</h3>
              <table>
                <tbody>
                <tr>
                  <th className="amt right">Amt</th>
                  <th className="unit">Unit</th>
                  <th className="ing">Ingredient</th>
                  <th className="action"></th>
                  <th className="action"></th>
                </tr>

                {this.props.ingredientList.map((ingredient, i) => {
                console.log(ingredient)
                return <IngredientDetail key={i} ingredient={ingredient} />

              })
              }

                </tbody>
                </table>
            </div>
          )
        }




}

  IngredientList.propTypes = {
    ingredientList: React.PropTypes.object
}



  export default IngredientList

/* to implement
 handleUnitChange: React.PropTypes.func,
 handleAmtChange:React.PropTypes.func,
 handleIngredientChange: React.PropTypes.func
 */