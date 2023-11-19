import React, { useState } from 'react'

export default function Parent() {
    const[college,setCollege]=useState("SKCET")
    const[name,setName]=useState("Dilip")
  return (
    <div>
      <h1>My Name is {name} My College is {college}</h1>
      <button onClick={()=> (college=="SKCET" ? setCollege("ATRIA"):setCollege("SKCET"))}>Click Me</button>
    </div>
  )
}