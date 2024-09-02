import React from 'react'
import Tlogo from '../Image/Tlogo.png'
const Formpag = () => {
  return (
    <div>
    <div className='fomrpage container'>
    <div className='row'>
    <div className='col-lg-6 col-md-12 formpagleft'>
    <div className='center'>
    <h1 className=''>LOGIN</h1>

    <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>

    <div class="relative mb-4">
        <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="text" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      
      <span className='btnsetform'>Log in</span>
      <br />
      <br />
      <br />
      
      <span className='btnsetform1 '>Sing up</span>
    </div>

    </div>
    <div className='col-lg-6 col-md-12'>
    <div className='right'>
    <img src={Tlogo} alt='asdfas' /> 

    <div class="relative">
        <label for="email" class="leading-7 text-sm text-gray-600">E  mail Address</label>
        <input type="email" id="email" name="email" placeholder='Enter your Email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>

    <div class="relative ">
        <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="text" id="password" name="password" placeholder='Entert your password' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>

      <button className='btn btn-primary'>LOGIN</button>
      <p>Forget Password? </p>
      <button className='btn btn-success'>Log In with Zoom</button>
      <button className='btn btn-success'>Log In with Team</button>


    </div>



    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Formpag