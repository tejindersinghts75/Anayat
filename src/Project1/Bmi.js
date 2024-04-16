import React, { useState } from 'react'
import Textbox from '../ValidationForm/Textbox'

function Bmi() {
    
    const [values, setValues] = useState({ weight: "", height: "" });

    const [bmi, setBmi] = useState(null);

    const [message , setMessage] = useState("")
    
    const onChange = (e) => {
  setValues((prevValues) => {
    const updatedValues = { ...prevValues, [e.target.name]: e.target.value };
    console.log(updatedValues);
    return updatedValues;
  });
};

  const BmiCalc = (e) => {
  e.preventDefault();
    console.log(values.weight)
    console.log(values.height)
  if (values.weight === 0 || values.height === 0) {
    alert("Please enter a valid weight and height");
  } else {
    // Use the correct BMI formula: weight / (height * height)
    let bmi = values.weight / (values.height * values.height);
    setBmi(bmi.toFixed(1));
    console.log("bme" + bmi); // Log the BMI here
  }
};



const input =[
    {
        id :1,
        name : "weight",
        placeholder : "Enter your weight",
        type : "text",
        label : "Enter Your Body Weight"
    },
    {
        id :2,
        name : "height",
        placeholder : "Enter your Height",
        type : "text",
        label : "Enter Your Body Height"
    },


]

  return (
    <div>
        <div>
            <form onSubmit={BmiCalc}>
               {
                input.map((input)=>
                (
                    <Textbox key={input.id} {...input}  onChange={onChange}/>
                ))
               }
             
               <button>Submit</button>
               <p>{bmi !== null ? `BMI: ${bmi}` : ''}</p>

            </form>
        </div>
    </div>
  )
}

export default Bmi