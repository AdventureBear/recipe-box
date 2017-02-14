/**
 * Created by suzanne on 1/31/17.
 */
 import recipeData from "../recipeData.json"

export default function filterRecipes(searchText) {
  const regex = new RegExp(searchText, 'gi');

  return recipeData.filter((recipe) => {
    if (recipe.title.match(regex)) {
      console.log(recipe.title)
      return true
    } else {
      return false
    }

  })
}