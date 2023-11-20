import React from 'react'

export default function Front() {
  function handleNameChange(){
      const fruits=['Apple','Orange','Banana','Mango'];
      const val=Math.floor(Math.random()*4)
      return fruits[val]
  }
  const handleClick =(e)=>{
    console.log(e.target.value)
  }
  const handleOnClick=(name)=>{
    console.log(`Hello ${name}`)
  }
  return (
    <div id="id">
      <h1>Let's Do It</h1>
      <p></p>
      <button>Click</button>
    </div>
  )
}
