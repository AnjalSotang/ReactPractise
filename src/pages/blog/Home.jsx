import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'



const Home = () => {
  const [blogs , setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get("https://react30.onrender.com/api/user/blog")
    if(response.status === 200){
      setBlogs(response.data.data)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
       <div className= "flex flex-wrap justify-center space-x-5 mt-6">
        {
          blogs.length > 0 && blogs.map((blog) => {
            return (
              <Card blog = {blog}/>
            )
          })
        }
       </div>
  )
}

export default Home
