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
                <RecipeCard />
            </div>
        )
    }
}

RecipeList.propTypes = {

};

export default RecipeList
