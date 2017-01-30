import React, { Component, PropTypes } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-searchbox'>
                <h1>SearchBox</h1>
            </div>
        )
    }
}

SearchBox.propTypes = {

};

export default SearchBox