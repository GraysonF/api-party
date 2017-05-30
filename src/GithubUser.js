import React, { Component } from 'react'

class GithubUser extends Component {
constructor(props) {
    super(props)
    this.fetchUserData()
}

    fetchUserData() {
        console.log('hi')
    }

    render() {
        return (
        <h3> Great jearb, you searched for {this.props.match.params.username} </h3>
    ) 
    }
    
        
    
}

export default GithubUser