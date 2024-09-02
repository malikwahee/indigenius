import React from 'react'
import Tlogo from '../Image/Tlogo.png';

const Navbar = () => {
  return (
    <div className='navlogo'>
    <div  className='left'>
    <img src={Tlogo}  alt='logo navbar' className='logonavset'/>
    </div>
    <div  className='right'>
    <h1>New to Indigenius? <span> Sign Up Free </span> </h1>
    </div>
    <span className='button'>Install App</span>
    </div>
  )
}

export default Navbar