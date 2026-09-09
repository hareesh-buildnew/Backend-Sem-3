import React, { useState } from 'react'
import axios from 'axios'
const login = () => {
    const [getData,setgetData]=useState({
        email:"",
        passWord:""
    })
    const navigate=useNavigate()
    let api=axios.post('http://localhost:3000/login')
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your account
        </p>


        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="passWord"
              placeholder="Enter your password"
              value={formData.passWord}
              onChange={handleChange}
              required
            />

          </div>


          <button type="submit">
            Login
          </button>

        </form>


        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

      </div>

    </div>
  )
}

export default login