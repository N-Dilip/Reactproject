import React, { Component } from 'react'
import EnComponent from './EnComponent'

class ClickCount extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click Me {this.props.count}</button>
      </div>
    )
  }
}
export default EnComponent(ClickCount)