import React from 'react'
import Form from './components/Form'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const handleLogin = async (data) => {
      try{
        const response = await axios.post("https://react30.onrender.com/api/user/login",data)
        console.log(response)
        if(response.status === 200){
          Navigate('/')
        }else{
          alert("Registration failed")
        }
      }catch(error){
        alert(error?.reponse?.data?.message)
      }
  }
  return (
  <Form type="Login" onSubmit={handleLogin} />
  )
}

export default Login
