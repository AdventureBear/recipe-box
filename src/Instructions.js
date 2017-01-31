import React, { Component, PropTypes } from 'react'
import './Instructions.css'

class Instructions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-instructions'>
                <b>Directions</b>
                <p>{this.props.instructions}</p>
            </div>
        )
    }
}

Instructions.propTypes = {
 instruction: React.PropTypes.string
}

export default Instructions