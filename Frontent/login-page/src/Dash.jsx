import React from 'react'

const Dash = () => {
    let token=localStorage.getItem('token')
    console.log("tokennnnnnnnnnnnnnnnnnnnnnn",token);
    async function fun1(){
        let res=await axios.get('http://localhost:3000/admin',{
            headers:{
                Authorization:token
            }
        })
    }
  return (
    <div>
        <button onClick={fun1}>Fetch Data</button>
    </div>
  )
}
export default Dash