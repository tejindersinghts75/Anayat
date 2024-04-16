import React, { useCallback, useEffect, useState } from 'react'
import Textbox from '../ValidationForm/Textbox'
import { useDispatch } from 'react-redux'
import { setLogin, updateUser } from '../ReduxThunk/Todo'

function Login(props) {
    const [ values, setValues] = useState({username:"" , password:"" })
    const [errors, setErrors] = useState(false)
    const [submitBtn, setSubmitBtn] = useState(true)

    const dispatch = useDispatch()

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            required: true,
            error : errors.username,
          },
          {
            id: 2,
            name: "password",
            type: "text",
            placeholder: "Password",
            label: "Password",
            required: true,
            error : errors.password,
          },
          
    ]
    const onChange = (e) =>
    {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    useEffect(()=>{
            const newErrors = {};

            if (!values.username || values.username.length < 3 || values.username.length > 16) {
                newErrors.username = 'It should be between 3 - 6 characters';
              }
              if(!values.password || values.password.length < 3 || values.password.length > 16)
              {
                newErrors.password = "Please enter correct password"
              }

              setErrors(newErrors)
              const isEmpty = Object.keys(newErrors).length === 0;
              console.log(errors)
              console.log(values.username)

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
    
    },[values])
    const handleSubmit = (e) =>
    {
      e.preventDefault()
        // if(values.username && values.password)
        // {
        //     props.onLogin(values.username)
        // }
      

dispatch(
  updateUser({
    username: values.username,
    password: values.password,
    disable: false,
  })
)
    }
  return (
    
    <div>
    
        <div>
      <div>Validationform {props.name}</div>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Textbox key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button disabled={submitBtn}>Submit</button>
            
      </form>
    </div>
    </div>
  )
}

export default Login