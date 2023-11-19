import React from 'react'

export default function DynamicRendering(isLoggedIn) {
  return (
    <div>
      {isLoggedIn ?<p>Welcome,User!</p>:<p>Please login in.</p>}
    </div>
  )
}
