import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
     <h2>Join Quiz</h2>
     <p>Test Your Knowledge And Score Good All The Best?</p>
     <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen