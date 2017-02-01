/**
 * Created by suzanne on 1/31/17.
 */
 import recipeData from "../recipeData.json"

export default function filterRecipes(searchText){
  return recipeData.filter((recipe)=> {
    if (recipe.title.includes(searchText)) {
      return true
    }

    if (recipe.ingredientList.ingredient.includes(searchText)) {
      return true
    }
    return false
  })
}