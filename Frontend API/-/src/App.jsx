import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
const App = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    passWord: "",
    role: ""
  });
  function fun1(e){
      console.log(e.target);
      let {name,value}=    e.target
      SetData({...data,[name]:value})
      console.log(data,"datata");
  }
  async function done() {
    let apiR = await axios.post("http://localhost:3000/signUp", data);
    console.log(apiR, "heheheeh");
  }
  return (
    <div>
      <input placeholder="Enter name" onChange={fun1} />
      <input placeholder="Enter email" />
    </div>
  );
};

export default App;
