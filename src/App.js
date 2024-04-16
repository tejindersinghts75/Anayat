//200crore in 5 years
import './App.css';
import React, { useEffect, useState } from 'react';
import Textbox from './ValidationForm/Textbox';
import LoginLayout from './ValidationForm/LoginLayout';
import Validationform from './ValidationForm/Validationform';
import Bmi from './Project1/Bmi';
import Form from './FormValidate/Form';
import Login from './Login/login';
import SignUp from './Login/signup';
import Dashboard from './Login/Dashboard';
import MultiStep from './Multistep/MultiStep';
import MainHome from './Quiz/MainHome';
import MultiStepForm from './Multistepform/MultiStepForm';
import { Provider, useDispatch, useSelector } from 'react-redux';
import rootReducer from './ReduxThunk/Todo';
import Counter from './Redux/Counter';
import { setGetData } from './ReduxThunk/Todo';
import { isDisabled } from '@testing-library/user-event/dist/utils';



function App(props) {
  // console.log(props)
  // const[loggedIn, setLoggedIn] = useState('')
  // const[recievedData, setReceivedData] = useState()
  const[vanish, setVanish] = useState(true)
    const[data, showData] = useState(false)
  console.log("props",props)  
  const {username, password,disable} = useSelector((state)=>state.user);
  useEffect(()=>{
  console.log("state = ",username)
  console.log("state =", password)
  console.log("state =", disable)
})



  

  useEffect(()=>{
    showData(username)
    setVanish(disable)
  
  })
 




  return (
  
    <div>
      
       {/* { vanish && <Login />}
      { username && <Dashboard username={username} />}
      <p>{vanish}</p>
     */}
    <MainHome/>
    </div>
    
  );
}

export default App;
