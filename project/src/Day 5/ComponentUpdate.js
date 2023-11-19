import React, { Component } from 'react'

export default class ComponentUpdate extends Component {
    state={color:"Yellow"}
    // whether need to update(return true) or not (return false)
    shouldComponentUpdate()
    {
        return true;
    }
    // function call automatically after render execution
    componentDidMount()
    {
        setTimeout(()=>{this.setState({color:"Blue"})},3000)
    }
    
    // to display the previous value 
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("i").innerHTML=`Previous value ${prevState.color}`;
    }
    // to check whether updated or not
    componentDidUpdate(prevProps,prevState)
    {
        document.getElementById("i").innerHTML=`Previous value ${prevState.color}`;
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}
