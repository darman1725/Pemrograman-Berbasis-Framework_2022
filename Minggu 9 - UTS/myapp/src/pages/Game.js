import React from 'react'
import data from '../data/Data'
import Next from '../components/Buttons/Next'
import Prev from '../components/Buttons/Prev'
import {useEffect} from "react"

function Game({count, setCount, option, setOption, score, setScore, page, setPage}) {
  let numberOfQuestions = 7

  
  const check = ()=>{
    if(option === 0){
      return 
    }
    else if(option === data[count].correct){
      console.log("correct")
      setScore(score + 1)
    }
    else{
      console.log("incorrect")
    }
  }
  
  useEffect(()=>{
    setOption(0)
  }, [page])
  
  useEffect(()=>{
    check()
  }, [option])
  
  return (
    <div class="everything-inside">
    {/* <div className="score ">
    <h1 >Score {score}</h1>
    </div> */}
      <div className="container shadow p-4 bg-body rounded align-middle">
                    {/* Question */}
      <div className="question">{data[count].question}</div>
                    {/* options */}
      <div className="options mt-4">
                      {/* setScore                                                                                    on Correct change to green                                 on Wrong change to red */}
      <div onClick={()=>{setOption(1)}} className={`a btn btn-light shadow-sm border d-flex d-wrap mt-2 mb-2 option ${option===data[count].correct&&option===1?'correct':''} ${option!== data[count].correct&&option===1?'wrong':''} ${option>0  ?'dis':''}`}>{data[count].answers[0]}</div>
      <div onClick={()=>{setOption(2)}} className={`a btn btn-light shadow-sm border d-flex d-wrap mt-2 mb-2 option ${option===data[count].correct&&option===2?'correct':''} ${option!==data[count].correct&&option===2?'wrong':''} ${option>0 ?'dis':''}`}>{data[count].answers[1]}</div>
      <div onClick={()=>{setOption(3)}} className={`a btn btn-light shadow-sm border d-flex d-wrap mt-2 mb-2 option ${option===data[count].correct&&option===3?'correct':''} ${option!==data[count].correct&&option===3?'wrong':''} ${option>0 ?'dis':''}`}>{data[count].answers[2]}</div>
      <div onClick={()=>{setOption(4)}} className={`a btn btn-light shadow-sm border d-flex d-wrap mt-2 mb-2 option ${option===data[count].correct&&option===4?'correct':''} ${option!==data[count].correct&&option===4?'wrong':''} ${option>0 ?'dis':''}`}>{data[count].answers[3]}</div>
      </div>
                    {/* buttons */}
      <div className="button-group d-flex">
      {/* <Prev count={count} numberOfQuestions={numberOfQuestions} setCount={setCount} page={page} setPage={setPage} /> */}
      <Next count={count} option={option} numberOfQuestions={numberOfQuestions} setCount={setCount} page={page} setPage={setPage} />  
    </div>
    </div>
    </div>
  )
}

export default Game