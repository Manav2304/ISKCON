import React from 'react'
import { AboutUs } from './Pages/About'
import { NavBar } from './Components/Navbar'



export const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar/>
      <AboutUs/>
    </>
  )
}

