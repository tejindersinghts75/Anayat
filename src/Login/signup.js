import React, { useCallback, useEffect, useState } from 'react'
import Textbox from '../ValidationForm/Textbox'
import { useDispatch } from 'react-redux'
import {setsignUp} from '../ReduxThunk/Todo'
// import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [values, setValues] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: ""/*, selectedOption: "", option1: "", option2: ""*/ })
  const [errors, setErrors] = useState(false)
  const [submitBtn, setSubmitBtn] = useState(true)
  const dispatch = useDispatch();
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      label: "Firstname",
      required: true,
      error: errors.firstname,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      label: "lastname",
      required: true,
      error: errors.lastname,
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "Email",
      required: true,
      error: errors.email,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      required: true,
      error: errors.password,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirmPassword",
      label: "Confirm Password",
      required: true,
      error: errors.confirmPassword,
    },
    //   {
    //     id: 6,
    //     name: "selectedOption",
    //     type: "radio",
    //     value: "option1",
    //     placeholder: "Option1",
    //     label: "India",
    //     checked: values.selectedOption === 'option1',
    //     required: true,

    //   },
    //   {
    //     id: 7,
    //     name: "selectedOption",
    //     type: "radio",
    //     value: "option2",
    //     placeholder: "Option2",
    //     label: "India",
    //     checked: values.selectedOption === 'option2',
    //     required: true,
    //   }
  ]
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // if(e.target.name === "selectedOption")
    // {
    //   setValues({...values, option1:"", option2:""})
    // }
    // console.log("values123", values)
   
  }


  useEffect(() => {
    const newErrors = {};

    if (!values.firstname || values.firstname.length < 3 || values.firstname.length > 16) {
      newErrors.username = 'It should be between 3 - 6 characters';
    }
    if (!values.lastname || values.lastname.length < 3 || values.lastname.length > 16) {
      newErrors.lastname = "Please enter correct password"
    }
    if (!values.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
      newErrors.email = 'Please enter the valid email';
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
    setErrors(newErrors)
    const isEmpty = Object.keys(newErrors).length === 0;
    //console.log(errors)
    // console.log(values.username)

    if (isEmpty) {
      // console.log('false')
      setSubmitBtn(false);
    }
    else {
      // console.log('false')
      setSubmitBtn(true)
    }

  }, [values])


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setsignUp({
        firstname : values.firstname,
        lastname:values.lastname,
        email:values.email,
        password:values.password,
        confirmPassword:values.confirmPassword,
      })
    )
  }

 

  return (
    <div>
      <div>
        <div>Validationform</div>
        <form style={{ width: "300px" }} onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Textbox key={input.id} {...input} value={values[input.name]} onChange={onChange} />

          ))
          }
          {/* {values.selectedOption === "option1" && (
            <Textbox
              name="option1"
              placeholder="Enter information for Option 1"
              type="text"
              value={values.option1}
              onChange={onChange}
            />
          )}
          {values.selectedOption === "option2" && (
            <Textbox
              name="option2"
              placeholder="Enter information for Option 2"
              type="text"
              value={values.Option2}
              onChange={onChange}
            />
          )} */}
          <button disabled={submitBtn}>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default SignUp