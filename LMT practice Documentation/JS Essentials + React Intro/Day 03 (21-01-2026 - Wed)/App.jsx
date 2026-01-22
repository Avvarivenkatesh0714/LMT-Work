import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <p>{count}</p>
    </div>
  )
}

export default App
