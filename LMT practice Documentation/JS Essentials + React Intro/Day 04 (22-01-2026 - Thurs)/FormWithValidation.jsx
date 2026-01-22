import React from 'react';
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(message.trim()===""){
      setError("Please enter the input!!")
      return;
    }
    setError("")
    console.log(message)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" onChange={(e)=>setMessage(e.target.value)}></input>
         {error && <p style={{color: "red"}}>{error}</p>}
         <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
