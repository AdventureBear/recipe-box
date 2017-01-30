import React, { Component, PropTypes } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-footer'>
                <h1>Footer</h1>
            </div>
        )
    }
}

Footer.propTypes = {

};

export default Footer