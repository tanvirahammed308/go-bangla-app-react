import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto my-10 '>
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-[800px] ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
      Welcome to Travel <span className='text-[#2B7FFF]'>Bangla!</span> 
      Explore the beauty of Bangladesh with ease. Log in to access exclusive tour packages, personalized travel plans, and seamless booking experiences. Start your journey with us today!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn border-[#2B7FFF] mt-4">Login</button>
        </fieldset>
        <div className='text-center'>
        <p className='capitalize'>Are You new ? <span>
          <Link to='/signup' className='text-[#2B7FFF] '>
          register now
          </Link>
          
         </span></p>

        </div>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Login