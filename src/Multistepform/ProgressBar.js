import React from 'react'
import '../App.css'
function ProgressBar(props) {
    
    const {progress} = props 
    console.log(props)
  return (
    <div className='progressbar'>
        <div style={{width:`${progress}%`, backgroundColor:"red", height:"100%"}}></div>
    </div>
  )
}

export default ProgressBar