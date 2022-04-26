import React from 'react'
import {useHistory} from 'react-router-dom'

function Start() {
  const history = useHistory()
  return (
    <div class="start-container">
    <div class="start-text">
      <h1>Welcome to the Quiz</h1>
      <button onClick={()=>{
        history.push("/game")
      }} class="btn btn-dark start-button">Start!</button>
    </div>
    </div>
  )
}

export default Start