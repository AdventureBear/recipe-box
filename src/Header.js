import React, { Component, PropTypes } from 'react'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-header'>
                <h1>Header</h1>
            </div>
        )
    }
}

Header.propTypes = {

};

export default Header