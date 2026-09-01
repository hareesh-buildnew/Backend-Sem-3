import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
const App = () => {
  let [apiData,setApiData]=useState([])
  // useEffect(()=>{

  //   fetch("http://localhost:4000/").then((res)=>{
  //     return res.json()
  //   }).then((data)=>{
  //     console.log(data);
  //     setApiData(data)
  //   })

  // },[])
  useEffect(()=>{
    async function api() {
      let res=await axios.get("http://localhost:4000/")
      console.log(res.data);
      setApiData(res.data)
    }
    api()
  },[])
  return (
    <div>{
      apiData.map((a)=>{
        return(
          <>
          <li key={a.id}>
            <h2>{a.id}</h2>
            <h2>{a.name}</h2>
          </li>
          </>
        )
      })
      }</div>
  )
}

export default App