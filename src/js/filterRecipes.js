/**
 * Created by suzanne on 1/31/17.
 */
 import recipeData from "../recipeData.json"

export default function filterRecipes(searchText){
  const searchTextToLower = searchText.toLowerCase()
  return recipeData.filter((recipe)=> {
    if (recipe.title.toLowerCase().includes(searchTextToLower)) {
      console.log("Returning", recipe.title)
      return true
    }
    return false
  })
}