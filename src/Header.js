import React, { Component } from 'react'
import './css/Header.css'
import logo from './images/frying_pan.png'

class Header extends Component {

    render(){
        return (
          <div className='component-header'>
                <img src={logo} className="logo" alt="logo" />
                <h2>Your Recipe Box</h2>
            <div className="search">
                <span className="label">Search:</span>
                <input className="input"  onChange={this.props.textChange} placeholder="Search Recipes" />
            </div>
        </div>
        )
    }
}

Header.propTypes = {
    textChange: React.PropTypes.func
};

export default Header