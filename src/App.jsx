import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StudentDashboard from './components/StudentDashboard'
import Navbar from './components/Navbar'


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
        <StudentDashboard></StudentDashboard>
    
    </React.Fragment>
  )
}

export default App;
