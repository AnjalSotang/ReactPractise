import React from 'react'
import Form from './components/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const handleLogin = async (data) => {
      try{
        const response = await axios.post(`${baseUrl}/login`,data)
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
