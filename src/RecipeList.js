import React, { Component, PropTypes } from 'react'
import RecipeCard from './RecipeCard'
import './RecipeList.css'

class RecipeList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-recipelist'>
                <h1>RecipeList</h1>
                {this.props.recipeData.map((recipe, i)=>{
                    return <RecipeCard key={i} recipe={recipe} />
                })}


            </div>
        )
    }
}

RecipeList.propTypes = {
    recipeData: React.PropTypes.array
};

export default RecipeList
