import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/Navbar';

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';
import AboutUs  from './pages/AboutUs';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App