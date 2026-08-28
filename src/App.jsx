import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>

      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
