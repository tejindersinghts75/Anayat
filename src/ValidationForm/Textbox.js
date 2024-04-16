import React, { useState } from 'react'
import "../App.css";

function Textbox(props) {
 
  const {/*label, errorMessage,error,checked, onChange , id,*/ ...inputProps} = props;
  const[focused, setFocused] = useState(false);
  const handleFocused = (e) =>
  {
    setFocused(true)
  }
  return (
    <div className='flex-div' >
        <label>{props.label}</label>
        <input {...inputProps} onChange={props.onChange} onBlur={handleFocused} focused={focused.toString()} />
        {/* <span>{props.errorMessage}</span> */}
        {/* {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
         */}
            {/* <span>{errorMessage}</span> */}
       
      {props.error && <span>{props.error}</span>}

    </div>
  )
}

export default Textbox