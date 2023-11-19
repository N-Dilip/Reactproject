import React, { Component } from 'react'

export default class TwoWayConcept extends Component {
    state={
        name:""
    }
    handle=(e)=>{
        this.setState({name:e.target.value})
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handle}></input>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
