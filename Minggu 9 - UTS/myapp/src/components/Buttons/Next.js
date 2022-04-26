import React from 'react'
import data from '../../data/Data'
import {useHistory} from "react-router-dom"

function Next({count, numberOfQuestions, setCount, page, setPage, option}) {
  const history = useHistory()
  return (
    <div className={`next-button ms-auto`}>
      {count < numberOfQuestions ? ( <button onClick={()=>{
         setPage(page + 1)
        setCount(count + 1)
      }} className={`btn ${option === 0?'btn-dark':''} ${option!==data[count].correct && option !== 0?'btn-danger':''} ${option===data[count].correct?'btn-success':''} `}>Next</button>)
      :
      (<button onClick={()=>{      //When count is less than 0
        setCount(count + 1)
        setPage(page + 1)
        history.push("/end")
      }} className="btn btn-danger">Finish</button>)
      }
      </div>
  )
}

export default Next