import React from 'react'
import MyAcademics from './MyAcademics'
import Navbar from './Navbar'
import { useState } from 'react';
import MySchedule from './MySchedule';
import News from './News';
import MyTasks from './MyTasks';
import MyGpaCalculator from './MyGpaCalculator';
import MyTimer from './MyTimer';

const StudentDashboard = () => {
  const [academicProgram,setAcademicProgram] = useState('');
  const [major,setMajor] = useState('');
  const [credits,setCredtis] = useState('');
  const [gpa,setGpa] = useState('');
  
  let schedule = [
    {name:'CS-351',days:'Mon-Wed',sch:'4:00pm - 6:45pm K428'},
    {name:'CS-105',days:'Mon',sch:'11:00pm - 1:45pm K420'},
    {name:'CS-355',days:'Thu',sch:'4:00pm - 6:45pm K428'},
  ];

  let news = [
    {link:"https://www.njcu.edu/about/news/2022/11/message-acting-president-jason-kroll", headline:"A Message from Acting President Jason Kroll",date:"Nov-23"},
    {link:"https://www.njcu.edu/about/news/2022/11/message-acting-president-jason-kroll", headline:"Reorganization of the Senior Administration",date:"Nov-14"},
    {link:"https://www.njcu.edu/about/news/2022/11/new-jersey-city-university-announces-executive-level-reorganization-plan", headline:"New Jersey City University Announces Executive Level Reorganization Plan",date:"Nov-14"},
    {link:"njcu.edu/about/news/2022/11/njcu-announces-chosenpreferred-name-policy", headline:"NJCU Announces Chosen/Preferred Name Policy",date:"Nov-1"},
    {link:"https://www.njcu.edu/about/news/2022/10/new-jersey-city-university-named-apple-distinguished-school", headline:"New Jersey City University Named an Apple Distinguished School",date:"Oct-18"},
  ];

  return (
      <div>
        <div className='page-container'>
        <MyTimer></MyTimer>
        <h1>Student Dashboard</h1>

          <div>
            <MyAcademics 
              academicProgram = {"Computer Science"}
              major = {"BS-Computer Science"}
              credits = {89}
              gpa = {3.45}
            />

            
            <MySchedule  schedule={schedule}/>

            <News news ={news}/>

            <MyGpaCalculator/>
          </div>
        </div>
      </div>
  )
}

export default StudentDashboard
