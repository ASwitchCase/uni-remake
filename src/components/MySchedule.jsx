import React from 'react'

const MySchedule = (props) => {
  return (
    <React.Fragment>
    <div className='contentBox' style={{width:'40%'}}>
    <h1>My Schedule</h1>
      <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Days</th>
                <th>Schedule</th>
            </tr>

            {props.schedule.map(course => 
            <tr key={course.name}>
                <td>{course.name}</td>
                <td>{course.days}</td>
                <td>{course.sch}</td>
            </tr>
            )}

        </tbody>
      </table>

    <br></br>
      <a href=''>Enroll of Courses</a>
      <a href=''>View My Grades</a>
      <a href=''>Evaluate Courses</a>

    </div>
    </React.Fragment>
  )
}

export default MySchedule
