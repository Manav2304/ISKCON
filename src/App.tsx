import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/Navbar';

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import AboutUs from './pages/AboutUs';
import Analytics from './pages/Analytics';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App