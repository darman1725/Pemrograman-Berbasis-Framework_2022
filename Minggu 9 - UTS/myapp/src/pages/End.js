import React from 'react'
import {useHistory} from 'react-router-dom'

function End({count, setCount, option, setOption, score, setScore, page, setPage}) {
  const history = useHistory()

  return (
    <div class="end-container">
      <div class='end-text'>
          <h1>Your score is {score}</h1>
          <button onClick={()=>{
            history.push("/")
          }} class="btn btn-dark end-button">Give another try?</button>
      </div>
    </div>
  )
}

export default End