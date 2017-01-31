import React, { Component, PropTypes } from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import Footer from './Footer'
import './RecipeBox.css'

class RecipeBox extends Component {
    constructor(props){
        super(props)
    }
    handleSearchChange = (event) => {
        console.log('search input changed to:', event.target.value);
    }
    render(){
        return (
            <div className='component-recipebox'>
                <Header textChange={this.handleSearchChange} />
                <RecipeList   recipeData={this.props.recipeData}

                  />
                <Footer />
            </div>
        )
    }
}

RecipeBox.propTypes = {
    recipeData: React.PropTypes.array
};

export default RecipeBox
