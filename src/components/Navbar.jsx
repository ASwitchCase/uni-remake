import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <ul>
                <img src="/images/NJCULogo.png"></img>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Student Resources</a></li>
                <li><a href="#contact">My Academics</a></li>
                <li><a href="#about">Sign out</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
