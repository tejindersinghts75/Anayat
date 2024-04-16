import React from 'react'
import Textbox from '../ValidationForm/Textbox'

function Sllide(props) {   

  
  return (
    <div>
        <Textbox type={props.textBoxProps[0].type} placeholder={props.textBoxProps[0].placeholder} name={props.textBoxProps[0].name} onChange={props.onChange}/>
        <Textbox type={props.textBoxProps[1].type} placeholder={props.textBoxProps[1].placeholder} name={props.textBoxProps[1].name} onChange={props.onChange}/>
    </div>
  )
}

export default Sllide