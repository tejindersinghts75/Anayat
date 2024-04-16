import React from 'react'

function Dashboard(props) {
  
  return (
     <div >
        <h1>Welcome, {props.username}</h1>
        <p>This is your dashboard</p>
    </div>
  )
}

export default Dashboard