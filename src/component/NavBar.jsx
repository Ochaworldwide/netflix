import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to="/" >
        <h1 className='text-red-600 font-bold cursor-pointer sm:text-4xl text-2xl'>NETFLIX</h1>
      </Link>
      {user?.email ? <div>
        <Link to="/account">
          <button className='text-white sm:pr-4 pr-2 text-sm sm:text-base'>Account</button>
        </Link>
        <button onClick={handleLogout} className='bg-red-600 sm:px-6 text-sm sm:text-base px-3 py-2 rounded cursor-pointer text-white '>log out</button>
      </div> : <div>
        <Link to="/userlogin">
          <button className='text-white sm:pr-4 pr-2 text-sm sm:text-base '>Sign in</button>
        </Link>
        <Link to="/usersignup">
          <button className='bg-red-600  sm:px-6 text-sm sm:text-base px-3 py-2 rounded cursor-pointer text-white '>Sign Up</button>
        </Link>
      </div>}

    </div>
  )
}

export default NavBar
