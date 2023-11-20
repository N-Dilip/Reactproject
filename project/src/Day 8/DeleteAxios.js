import axios from 'axios';
import React, { useState } from 'react'

export default function DeleteAxios() {
    const [id,setId]=useState("");
    const handleDelete=(event)=>{
        setId(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.delete(` http://localhost:3001/users/${id}`)
        .then(res=>{console.log(res.data)})
        .catch(error=>{console.log("Something went wrong "+error)})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleDelete}></input>
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}
