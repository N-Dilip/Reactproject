import React, { Component } from 'react'

export default class RefEc extends Component {
    myRef=React.createRef();

    hangleChange=(e)=>{
        e.preventDefault();
        const val=this.myRef.current.value;
        console.log(val);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.hangleChange}>
            <input type="text" ref={this.myRef}></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
