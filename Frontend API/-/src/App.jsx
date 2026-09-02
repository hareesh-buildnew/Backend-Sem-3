import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
const App = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    passWord: "",
  });
  useEffect(() => {}, []);
  async function done() {
    let apiR = await axios.post("http://localhost:3000/signUp", data);
    console.log(apiR, "heheheeh");
  }
  return (
    <div>
      <input placeholder="Enter name" onChange={fun1} />
    </div>
  );
};

export default App;
