import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.jsx'
import {BrowserRouter}  from 'react-router-dom'
import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
)
