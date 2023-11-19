import React from 'react'

export default function ParenChild() {
  return (
    <div>
      <Child name="Dilip"></Child>
    </div>
  )
}
function Child(props){
    return(
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    )
}