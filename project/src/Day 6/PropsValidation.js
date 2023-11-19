import React from 'react'
import PropTypes  from 'prop-types'
export default function PropsValidation(props) {
  return (
    <div>
      <h1>My Name is {props.student}</h1>
    </div>
  )
}
PropsValidation.propTypes={student:PropTypes.string}