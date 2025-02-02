import React from 'react'
// import Layout from '../../components/layout/layout'
import Card from './components/card/Card'
import Layout from '../../components/layout/layout'


const Home = () => {
  return (
    <Layout>
       <div className= "flex flex-wrap justify-center space-x-5 mt-6">
       <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
    </Layout>
  )
}

export default Home
