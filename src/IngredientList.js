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
                return <IngredientDetail
                  key={i}
                  index={i}
                  ingredient={ingredient}
                  saveIngredientList={this.props.saveIngredientList} />

              })
              }

                </tbody>
                </table>
            </div>
          )
        }




}

  IngredientList.propTypes = {
    ingredientList: React.PropTypes.object,
    saveIngredientList: React.PropTypes.func
}



  export default IngredientList

/* to implement
 handleUnitChange: React.PropTypes.func,
 handleAmtChange:React.PropTypes.func,
 handleIngredientChange: React.PropTypes.func
 */