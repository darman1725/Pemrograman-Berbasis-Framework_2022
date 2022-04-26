import React from 'react'

function Next({count, numberOfQuestions, setCount}) {
  return (
    <div className="prev-button">
      {count > 0? ( <button onClick={()=>{      //When count is more than 0
        setCount(count - 1)   
      }} className="btn btn-primary">Prev</button>)
      :
       (<button onClick={()=>{      //When count is less than 0
        setCount(count - 1)
      }} className="btn btn-primary" disabled>Prev</button>)}
      </div>
  )
}

export default Next