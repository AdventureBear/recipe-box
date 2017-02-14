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
                {this.props.recipies.map((recipe, i)=>{
                    return <RecipeCard key={i} recipe={recipe} editButtonClick={this.props.editButtonClick}/>
                })}


            </div>
        )
    }
}

RecipeList.propTypes = {
    recipies: React.PropTypes.array,
    editButtonClick: React.PropTypes.func
};

export default RecipeList
