import React, { Component } from 'react'
import Header from './Header'
import RecipeCard from './RecipeCard'
import Footer from './Footer'
import './css/RecipeBox.css'
import recipeData from './recipeData.json'
import filterRecipes from './js/filterRecipes.js'

class RecipeBox extends Component {
    constructor(props){
        super(props)
        this.state ={
            filteredRecipes: recipeData
        }
    }
    handleSearchChange = (event) => {
        console.log('search input changed to:', event.target.value)
        console.log(filterRecipes(event.target.value))
        this.setState({
            filteredRecipes: filterRecipes(event.target.value)

        })
    }
    saveRecipe = (newInstr, newTitle, i) => {
      console.log("Save Button Clicked in recipe box")
      var arr=this.state.filteredRecipes
      arr[i].title = newTitle
      arr[i].instructions = newInstr
      this.setState({filteredRecipes: arr})
    }
    updateIngredientsList = (i) => {
      console.log(i)
      console.log(this.state.filteredRecipes[i])
      const newIngredientObj = {"ingredient": "click edit to update", "unit": "tsp", "amount": "1"}
      var arr=this.state.filteredRecipes
      arr[i]["ingredientList"].push(newIngredientObj)
      this.setState({
        filteredRecipes: arr
      })

    }
  removeIngredientfromList = (ingNum, RecNum) => {
    console.log("Removing: " + this.state.filteredRecipes[RecNum].ingredientList[ingNum].ingredient  +  " from " + this.state.filteredRecipes[RecNum].title)
    var arr=this.state.filteredRecipes
    arr[RecNum].ingredientList.splice(ingNum,1)
    this.setState({
      filteredRecipes: arr
    })

  }
    saveIngredients = (ingredientObj, ingNum, recNum) => {
      console.log("Save Ingredients in recipe box")
      console.log(ingredientObj, ingNum, recNum)

      var arr=this.state.filteredRecipes
      console.log(arr[recNum])
      arr[recNum]["ingredientList"][ingNum] = ingredientObj
      this.setState({
        filteredRecipes: arr
      })
    }

    removeRecipe = (i) => {
        console.log('Delete Button Clicked' + i)
        var arr=this.state.filteredRecipes
        arr.splice(i, 1)
        this.setState({
            filteredRecipes: arr
        })
    }
    addRecipe = () => {
      var arr=this.state.filteredRecipes
      arr.unshift({
        "title":"New Recipe",
        "ingredientList":[
          {
            "amount":"1",
            "unit":"cup",
            "ingredient":"Enter First Ingredient"
          }
        ],
        "instructions":"Make it awesome"
      })
      this.setState({filteredRecipes: arr})
    }


    render(){
        return (
            <div className='component-recipebox'>
                <Header
                  textChange={this.handleSearchChange}
                />
              <div onClick={this.addRecipe} className="circle-btn">ADD</div>

                {recipeData.map((recipe, i)=>{
                    return (
                      <RecipeCard
                        key={i}
                        index={i}
                        recipe={recipe}
                        handleInstructionChange={this.handleInstructionChange}
                        saveRecipe={this.saveRecipe}
                        removeIngredientfromList={this.removeIngredientfromList}
                        updateIngredientsList={this.updateIngredientsList}
                        saveIngredients={this.saveIngredients}
                        deleteButtonClick={this.removeRecipe}
                        />
                    )
                })}

                <Footer />
            </div>
        )
    }
}



export default RecipeBox
