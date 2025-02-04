import React from 'react'
import axios from 'axios'
import { baseUrl } from '../../config'
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import Form from './components/Form'

const AddBlog = () => {
  const navigate = useNavigate()
  const handleCreateBlog = async (data) => {
    try{
    // const response = await axios.post(`${baseUrl}/blog`, data,
    const response = await axios.post("https://react30.onrender.com/api/user/blog", data,
       {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem("token") 
      }
    })

    if(response.status === 201){
      navigate("/")  
    }
    else{
      alert("Blog creation failed")
    }

  }
  catch(error){
    alert(error?.response?.data?.message)
  }
  }
  return (
   <Layout>
		<Form type='Create' onSubmit={handleCreateBlog} />
    </Layout>
  )
}

export default AddBlog
