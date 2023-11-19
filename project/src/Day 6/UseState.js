import React, { useState } from 'react'

export default function UseState() {
    const [student,setStudent]=useState({age:18,name:"Dilip"})
  return (
    <div>
      <h1>{student.age} {student.name}</h1>
      {/* <button onClick={setStudent({age:18,name:"Hari"})}>Click</button> */}
    </div>
  )
}
