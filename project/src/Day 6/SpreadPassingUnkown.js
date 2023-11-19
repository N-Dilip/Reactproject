import React, { Component } from 'react'

export default class SpreadPassingUnkown extends Component {
  render() {
    const{title1,...restValue}=this.props;
    return (
      <div>
        <h1>Title is {title1}</h1>
        <label >Enter Password : </label>
        <input {...restValue} required></input>
      </div>
    )
  }
}
