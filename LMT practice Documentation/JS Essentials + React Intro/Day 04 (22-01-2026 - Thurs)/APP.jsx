import React from 'react';
import { useState } from 'react'

function App() {
  const [inputs, setInputs] = useState({name:"",email:"",password:""})
  
  function handleChange(e){
    const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  
  

  return (
    <div>
      <input type="text" name="name" placeholder="Name..." value={inputs.name}
      onChange={handleChange}></input>
      <input type="email" name="email" placeholder="Email..." value={inputs.email}
      onChange={handleChange}></input>
      <input type="password" name="password" placeholder="Password..." value={inputs.password}
      onChange={handleChange}></input>
       <p>{JSON.stringify(inputs)}</p>
    </div>
  )
}

export default App
