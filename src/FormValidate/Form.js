import React, { useEffect, useState } from 'react'
import Textbox from '../ValidationForm/Textbox';
import { logDOM } from '@testing-library/react';

function Form() {
    const[values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })
    const [showError, setError] = useState(false)
   
    const [submitBtn, setSubmitBtn] = useState(true)


    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          label: "Username",
          error : showError.username,
        },
        {
          id: 2,
          name: "email",
          type: "text",
          placeholder: "Email",
          label: "Email",
          required: true,
          error : showError.email,
        },
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
          required: true,
          error : showError.birthday,
        },
        {
          id: 4,
          name: "password",
          type: "text",
          placeholder: "Password",
          label: "Password",
          required: true,
          error : showError.password,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "text",
          placeholder: "ConfirmPassword",
          label: "Confirm Password",
          required: true,
          error : showError.confirmPassword,
        },
      ];

     useEffect(()=>{
        const newErrors = {};
 if (!values.username || values.username.length < 3 || values.username.length > 16) {
            newErrors.username = 'It should be between 3 - 6 characters';
          }
      
          if (!values.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
            newErrors.email = 'Please enter the valid email';
          }
      
          if (!values.birthday || !/^\d{4}-\d{2}-\d{2}$/.test(values.birthday)) {
            newErrors.birthday = 'Please enter the DOB';
          }
      
          if (!values.password || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,20}$/.test(values.password)) {
            newErrors.password = 'For Eg. Admin@123';
          }

          if (!values.confirmPassword || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,20}$/.test(values.confirmPassword)) {
            newErrors.confirmPassword = 'For Eg. Admin@123';
        
          }
         
      
          if (values.confirmPassword !== values.password) {
            newErrors.confirmPassword = 'Password doesn\'t match';
          }

          setError(newErrors)
          console.log("confirpassword " + values.confirmPassword)
          console.log("password " + values.password)
          const isEmpty = Object.keys(newErrors).length === 0;

          if(isEmpty)
          {
            console.log('false')
            setSubmitBtn(false);
          }
          else
          {
            console.log('false')
            setSubmitBtn(true)
          }

          console.log(newErrors)
          console.log("isEmptyGlo" + submitBtn)

      
     },[values])

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        const a = 'tedsfsdf'
        console.log('aaaa',a,values)
        console.log(values.username)
        };
    

        const handleSubmit = (e) =>
        {
            e.preventDefault()
        }
         
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Textbox key={input.id} {...input} /*value={values.name}*/ onChange={onChange} />
        ))}
        <button disabled={submitBtn} >Submit</button>
    
        </form>
  
    </div>
  )
}

export default Form