import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Sllide from './Sllide1';
import '../App.css'
import ProgressBar from './ProgressBar';

const MultiStepForm = () => {
  const [data, setData] = useState({firstname:"",lastname:"",phonenumber:"",email:""})
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(25)

  const nextPrev = (newStep) => {
    switch (newStep) {
      case 1:
       
        setStep(newStep)
        if (data.firstname.trim() !== "" && data.lastname.trim() !== "") {
          setStep(newStep);
          setProgress(50)
        } else {
          // Handle the case where firstname or lastname is blank
          setStep(0)    
          document.getElementById("demo").innerHTML ="Please fill" 
        }
        break;

      case 2:
        
        setStep(newStep)
        if (data.phonenumber.trim() !== "" && data.email.trim() !== "") {
          setStep(newStep);
          setProgress(75)
        } else {
          // Handle the case where firstname or lastname is blank
          setStep(1)    
          alert("please fill")      
        }
        break

      case 3:
        setProgress(100)
        setStep(newStep)
        console.log(data)
      
        break
    }
  }
const textBoxProps =[
  {type:"text" , placeholder:"firstname" , name:"firstname"},
  {type:"text" , placeholder:"lastname", name:"lastname"}
]
const textBoxProps1 =[
  {type:"text" , placeholder:"Phone Number", name:"phonenumber"},
  {type:"text" , placeholder:"email" , name:"email"}
]
const textBoxProps2 =[
  {type:"text" , placeholder:"xyz "},
  {type:"text" , placeholder:"abc"}
]
const onChange = (e)=>
{
  setData({...data,[e.target.name]: e.target.value})
 
}


  return (
    <div style={{width:"350px"}}>
      <ProgressBar progress={progress}/>
      {step === 0 && <Sllide textBoxProps={textBoxProps} onChange={onChange} />}
      {step === 1 && <Sllide textBoxProps={textBoxProps1} onChange={onChange}/>}
      {step === 2 && <Sllide textBoxProps={textBoxProps2}/>}
      {step === 3 && <p>Done!</p>}  
      <button disabled={step === 0} onClick={() => nextPrev(step - 1)}>Prev</button>
      <button disabled={step === 3} onClick={() => nextPrev(step + 1)}>Next</button>
    <p id="demo">Please fill</p>

    </div>
  );
};

export default MultiStepForm;