import React, { Component, PropTypes } from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import Footer from './Footer'
import './RecipeBox.css'

class RecipeBox extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-recipebox'>
                <Header />
                <RecipeList
                    recipeData={[
                    {
                    title: "The Best Brownie",
                    ingredientList:
                        [
                            {
                                amount: "1/2",
                                unit: "cup",
                                ingredient: "vegetable oil"
                            }, {
                                amount:"1",
                                unit:"tsp",
                                ingredient:"vanilla"
                            }, {
                                amount:"2",
                                unit:" large",
                                ingredient: "eggs"
                            }, {
                                amount:"1/4",
                                unit: "tsp",
                                ingredient: "baking powder"
                            }, {
                                amount: "1/3",
                                unit:"cup",
                                ingredient:"cocoa powder"
                            }, {
                                amount:"1/4",
                                unit:"tsp",
                                ingredient:"salt"
                            }, {
                                amount:"1/2",
                                unit:"cup",
                                ingredient:"flour"
                            }
                        ],
                     instructions: "Preheat oven to 350°. \n" +
                    "Mix oil and sugar until well blended. \n" +
                    "Add eggs and vanilla; stir just until blended." +
                    "Mix all dry ingredients in a separate bowl." +
                    "Stir dry ingredients into the oil/sugar mixture." +
                    "Pour into greased 9 x 9 square pan." +
                    "Bake for 20 minutes or until sides just start to pull away from the pan." +
                    "Cool completely before cutting." +
                    "Note: I usually double the recipe and bake in a 9 x 13 pan. If you double the recipe, you will need to cook longer than 20 minutes."
                    },{
                    title: "Baked Chicken Paprika",
                    ingredientList:
                        [
                            {
                                amount: "2",
                                unit: "tbsp",
                                ingredient: "paprika"
                            }, {
                                amount:"1/2",
                                unit:"tsp",
                                ingredient:"garlic salt"
                            }, {
                                amount:"1/4",
                                unit:" tsp",
                                ingredient: "freshly cracked black pepper"
                            }, {
                                amount:"One 4",
                                unit: "lb",
                                ingredient: "roasting chicke"
                            }, {
                                amount: "1/4",
                                unit:"cup",
                                ingredient:"butter, melted"
                            }
                        ],
                    instructions: "Pre-heat oven to 450 degrees F and pat the chicken dry with paper towel." +
                     "Mix together the paprika, garlic salt and pepper and spread evenly over the entire surface of the chicken." +
                      "Place the chicken on a roasting rack in a roasting pan. The rack is essential so the entire chicken gets crispy." +
                       "Roast the chicken for 1 hour and 15 minutes. 25 minutes into roasting, reduce the heat to 350 degrees F and baste the chicken with the melted butter. Repeat the basting process every 15 minutes with the remaining butter." +
                        "Once done, a meat thermometer should register at 165 degrees F and the juices should run clean. Remove from the oven and tent with tin foil for 10 minutes before carving."
                    },{
                    title: "Garlic Roasted Potatoes",
                    ingredientList:

                      [
                            {
                                amount: "3",
                                unit: "pounds",
                                ingredient: "small red or white potatoes"

                            }, {
                                amount: "1/4",
                                unit: "cup",
                                ingredient: "good olive oil"
                            }, {
                                amount:"1 1/2",
                                unit:"tsp",
                                ingredient:"kosher salt"
                            }, {
                                amount:"1",
                                unit:" tsp",
                                ingredient: "freshly ground black pepper"
                            }, {
                                amount:"2",
                                unit: "tbsp",
                                ingredient: "minced garlic (6 cloves)"
                            }, {
                                amount: "2",
                                unit:"tbsp",
                                ingredient:"minced fresh parsley"
                            }
                        ],
                    instructions: "Preheat the oven to 400 degrees F." +
                     "Cut the potatoes in half or quarters and place in a bowl with the olive oil, salt, pepper, and garlic; toss until the potatoes are well coated. Transfer the potatoes to a sheet pan and spread out into 1 layer. Roast in the oven for 45 minutes to 1 hour or until browned and crisp. Flip twice with a spatula during cooking in order to ensure even browning." +
                      "Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot."
                    }]
                    }
                  />
                <Footer />
            </div>
        )
    }
}

RecipeBox.propTypes = {

};

export default RecipeBox
