import React, { Component } from 'react'

export default class ComponentMount extends Component {
    state={color:"Yellow"}
    componentDidMount()
    {
        setTimeout(()=>{this.setState({color:"Blue"})},3000)
    }
  render() {
    return (
      <div>
        {this.state.color}
      </div>
    )
  }
}
