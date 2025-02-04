import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/auth/Register'
import Home from './pages/Blog/Home'
import Login from './pages/auth/Login' 
// import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'
import AddBlog from './pages/blog/AddBlog'

function App() {



  return (
    // <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog/add' element={<AddBlog />} />
          {/* <Route path='/blog/edit' element={<EditBlog />} /> */}
          <Route path='/blog/id' element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    // </Layout>
  )
}

export default App
