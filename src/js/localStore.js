/**
 * Created by suzanne on 2/24/17.
 */
export function setLocalStorage(recipes) {

  var _adventurebear_recipes = recipes;

// Put the object into storage
  localStorage.setItem('_adventurebear_recipes', JSON.stringify(_adventurebear_recipes));


}

export function checkLocalStorage(key){
  //checks if local storage object exists for this project
  if(localStorage.getItem(key)) {
    console.log("Local storage exists")
    return true
  }
  return false;
}

export function getLocalStorage() {
// Retrieve the object from storage
  var retrievedObject = JSON.parse(localStorage.getItem('_adventurebear_recipes'));
  //gets the locally stored recipe object on component load
  console.log(retrievedObject)
  return retrievedObject
}
