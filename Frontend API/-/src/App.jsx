import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
const App = () => {
  let [data,setData]=useState({
    name:"",
    email:"",
    passWord:""
  })
  useEffect(()=>{
    
  },[])
  return (
    <div>
      <input placeholder="Enter name" onChange={fun1}/>
    </div>
  )
}

export default App