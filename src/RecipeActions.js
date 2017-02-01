import React, { Component, PropTypes } from 'react'
import './RecipeActions.css'

class RecipeActions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-recipeactions'>
                <button className="button" onClick={this.props.editButtonClick}>Edit</button>
            </div>
        )
    }
}

RecipeActions.propTypes = {
 editButtonClick: React.PropTypes.func
};

export default RecipeActions