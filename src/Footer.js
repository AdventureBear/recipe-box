import React, { Component, PropTypes } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='component-footer'>
                <p>A Free Code Camp Project</p>
                <p>by Essay Press Full Stack Web Development</p>
                <p>Follow me on <a href="http://www.github.com/AdventureBear">GitHub</a></p>
            </div>
        )
    }
}

Footer.propTypes = {

};

export default Footer