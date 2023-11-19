import React, { Component } from 'react'

export default class PropsClassState extends Component {
    state={count:0,name:"SKCET",place:"CBE"}
    changeCollege=()=>{
      if(this.state.name=="SKCET"){
      this.setState({name:"SRM",place:"Chennai"})
      this.setState({count:this.state.count+1})
    }
    else{
      this.setState({name:"SKCET",place:"CBE"})
      this.setState({count:this.state.count+1})
      }
    }
    
    // constructor(){
    //   super();
    //   this.state={name:"SKCET",place:"CBE"}
    // }
    // changeCollege(){
    //   this.setState({name:"SRM",place:"Chennai"})
    // }
    // state = {
    //   count: 0,
    //   };
    //   handle=()=>{
    //     this.setState({count:this.state.count+1})
    //   }
  render() {
    return (
      <div>
        <h1>I am studing at {this.state.name} place {this.state.place}</h1>
        <h1>
          count:{this.state.count}
        </h1>
        <button onMouseOver={this.changeCollege}>Click Me</button>
      </div>
    )
  }
}
