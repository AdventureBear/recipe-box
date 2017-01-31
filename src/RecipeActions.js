import React, { Component, PropTypes } from 'react'
import './RecipeActions.css'

class RecipeActions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-recipeactions'>
                <button className="button">Edit</button>
            </div>
        )
    }
}

RecipeActions.propTypes = {

};

export default RecipeActions