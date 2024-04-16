import React, { useState } from 'react';
import Textbox from './Textbox';

function Validationform() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: errors.username,
      required: true,
      error: errors.username,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
      error: errors.email,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
      error: errors.birthday,
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
      placeholder: "ConfirmPassword",
      label: "Confirm Password",
      required: true,
      error: errors.confirmPassword,
    },
  ];

  function validateData(values) {
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

    if (!values.password || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(values.password)) {
      newErrors.password = 'For Eg. Admin@123';
    }

    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Password don\'t match';
    }

    setErrors(newErrors); // Set the newErrors object as the errors state

    return Object.keys(newErrors).length === 0;
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values)

  function handleSubmit(e) {
    e.preventDefault();
    validateData(values);
  }


  return (
    <div>
      <div>Validationform</div>
      <form style={{ width: "300px" }} o  nSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Textbox key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button disabled={values.newErrors}>Submit</button>
      </form>
    </div>
  );
}

export default Validationform;
