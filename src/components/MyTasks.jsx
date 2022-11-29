import React from 'react'

const MyTasks = () => {
  return (
    <React.Fragment>
        <div className='contentBox'>
          <h1>My Tasks</h1>

          <div className='tasks'>
            <h2>To Dos: <a>0</a></h2>
          </div>

          <div className='tasks'>
            <h2>Holds:</h2>
          </div>
        </div>
    </React.Fragment>
  )
}

export default MyTasks;
