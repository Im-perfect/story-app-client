import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div>
                    <img src={require('../leaves.jpeg')} alt="leaves" className="image"/>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
