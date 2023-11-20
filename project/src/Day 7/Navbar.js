import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Navbar() {
    const navigate=useNavigate();
    const handleHome=()=>{navigate("/Home")}
    const handleAbout=()=>{navigate("/About")}
  return (
    <div>
      <ul>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleAbout}>About</button>
      </ul>
    </div>
  )
}
