import React, { useState } from 'react'
import Textbox from '../ValidationForm/Textbox'

function MultiStep(props) {

        const[name, setName] = useState({firstname:"", lastname:"", email:"",residency:"", india:"", American:""})
        const onChange = (e) => {
            setName({ ...name, [e.target.name]: e.target.value });


          };
        const handleSubmit = (e)=>
        {
            e.preventDefault()
            // props.onSubmit(name)
            console.log(name)
                  
        }
    
  return (  
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
          
            <Textbox type="text" name="firstname"   label="Firstname" value={name.firstname} onChange={onChange} />
            <Textbox type='text' name="lastname"  label="Lastname" value={name.lastname}  onChange={onChange}/>
            <Textbox type='text' name="lastname" label="email" value={name.email}  onChange={onChange}/>
            <lable>Residency</lable>
            <input type='radio' name="residency" value="indian" checked={name.residency === "indian"}  onChange={onChange}/>
            <input type='radio' name="residency" value="American" checked={name.residency === "American"} onChange={onChange}/>
            {name.residency === 'indian' && (<input type='text' name="india" placeholder='india' value={name.india} onChange={onChange}/>)}
            {name.residency === 'American' && (<input type='text' name="india" placeholder='american' value={name.American} onChange={onChange}/>)}

            <button>submit</button>
           
        </form>
        

    </div>
  )
}

export default MultiStep 