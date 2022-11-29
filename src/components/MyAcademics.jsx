import React from 'react'

const MyAcademics = (props) => {
  return (
    <React.Fragment>
      <div className='contentBox'>
        <h1>My Academics</h1>

        <h2>Academic Program and major</h2>
        
        <h3>{props.academicProgram}</h3>
        <h3>{props.major}</h3>

        <h2 style={{display:'inline-block'}}>Cumulative Credits:</h2>
        <h3 style={{display:'inline-block'}}>{props.credits}</h3>
        <br/>
        <h2 style={{display:'inline-block'}}>Cumulative GPA:</h2>
        <h3 style={{display:'inline-block'}}>{props.gpa}</h3>

      </div>
    </React.Fragment>
  )
}

export default MyAcademics
