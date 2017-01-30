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
                <h1>RecipeBox</h1>
                <Header />
                <RecipeList />
                <Footer />
            </div>
        )
    }
}

RecipeBox.propTypes = {

};

export default RecipeBox
