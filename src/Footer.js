import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {

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


export default Footer