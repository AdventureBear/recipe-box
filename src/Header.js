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
                <input  className="input"  onChange={this.props.textChange} placeholder="Search Recipes" />
            </div>
        )
    }
}

Header.propTypes = {
    textChange: React.PropTypes.func
};

export default Header