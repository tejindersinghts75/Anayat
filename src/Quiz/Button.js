import React from 'react'

function Button(props) {
  return (
    <div><button onClick={props.onSubmit}>{props.button}
      </button></div>
  )
}

export default Button