import React from 'react'
import { Link } from 'react-router-dom'
import { handleLogout } from './Logout'
import { useNavigate } from "react-router-dom";
const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();
  return (
    <div>
        
      <nav className='flex text-white  list-none space-x-14 font-bold h-12  p-8 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <Link  to="/"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Home</li></Link>
        <Link  to="/Contact"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Contact</li></Link>
        <Link  to="/Blog"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Blog</li></Link>
        {/* <img className='static' src="imgback.png" /> */}
        <Link  to="/Services"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Services</li></Link>
        <Link  to="/About"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>About</li></Link>
        <div className='flex space-x-10 relative left-60 '>
        <Link  to="/Login"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Log in</li></Link>
        <Link  to="/Signup"><li className='hover:text-yellow-300 hover:underline active:text-red-500'>Sign up</li></Link>
         <button onClick={() => handleLogout(null, navigate)}>Logout</button>
        </div>
        {/* <Link  to="/Learnmore"><li className='absolute  text-2xl left-[550px] top-80'>Learn more <span>→</span></li></Link> */}            </nav>
         
    </div>
  )
}
export default Navbar
