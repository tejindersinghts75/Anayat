import React, { useEffect, useState } from 'react'
import "../App.css";
import Textbox from './Textbox';


function LoginLayout() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()



  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);  
  };
  const handleLasttNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {

    console.log("Form submiited", { firstName, lastName, gender, email })
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
    setError('White spaces are not allowed');
  } else if (firstName.length > 15 || lastName.length > 15 || email.length > 35) {
    setError('Length of some fields is too long');
  } else if (firstName.length < 5 || lastName.length < 5 || email.length < 5) {
    setError('Length of some fields is too short');
  } else {
    setError('Success');
  }
    e.preventDefault();
  }





return (
  <div className='loginbox'>
  <p>{error}</p>
    <form onSubmit={handleSubmit}>
      <Textbox type="textbox" placeholder="FirstName" label="First Name" name="firstName" value={firstName} onChange={handleFirstNameChange} />
  
      <Textbox type="textbox" placeholder="LastName" name="lastName" label="Last Name" value={lastName}
        onChange={handleLasttNameChange} />
      <div className='flex-div'>
        <Textbox type="radio" name="gender" placeholder="LasatName" checked={gender === 'male'} label="Male" value="male" onChange={handleGenderChange} />
        <Textbox type="radio" name="gender" checked={gender === 'female'} placeholder="LasatName" label="Female" value="female" onChange={handleGenderChange} />
      </div>
      <Textbox type="email" name="email" placeholder="Email" label="Email" value={email} onChange={handleEmailChange} />
      <Textbox type="password" name="password" placeholder="password" label="Password" value={password} onChange={handlePasswordChange} />
     
      <button type="submit" > Submit </button>
    </form>
  </div>
)
}

export default LoginLayout

