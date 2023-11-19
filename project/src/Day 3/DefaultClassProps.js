import React, { Component } from 'react'

export default class DefaultClassPro extends Component {
  render() {
    return (
      <div>
        <h1>Hi this is {this.props.name} and i am at {this.props.college}</h1>
      </div>
    )
  }
}
DefaultClassPro.defaultProps={
    college:"SRM"
}