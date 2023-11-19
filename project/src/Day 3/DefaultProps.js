import React from 'react'

export default function DefaultPro(props) {
  return (
    <div>
      <h1>{`Hi my name is ${props.name} and iam  ${props.nam}`}</h1>
    </div>
  )
}
DefaultPro.defaultProps={
    nam:"mf"
}