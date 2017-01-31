import React, { Component, PropTypes } from 'react'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-header'>
                <span className="label">Search:</span>
                <input  className="input"   placeholder="Search Recipes" />
            </div>
        )
    }
}

Header.propTypes = {

};

export default Header