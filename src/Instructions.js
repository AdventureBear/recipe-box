import React, { Component, PropTypes } from 'react'
import './Instructions.css'

class Instructions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-instructions'>
                <h1>Instructions</h1>
            </div>
        )
    }
}

Instructions.propTypes = {

};

export default Instructions