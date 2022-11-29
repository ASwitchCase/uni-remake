import React, { useState } from 'react';

const MyTimer = () => {
    const[time,setTime] = useState(0);

    const updateTime = () =>{
        let d = new Date();
        let hours = d.getHours();
        let mins = String(d.getMinutes()).padStart(2, "0");;
        
        hours = (hours > 12? hours - 12: hours)
        setTime(hours + ":" + mins);
    }

    setInterval(updateTime, 1000);
  return (
    <React.Fragment>
        <div className='timer'>
            <h1>{time}</h1>
        </div>
    </React.Fragment>
  )
}

export default MyTimer
