import React from 'react'
import { Link } from 'react-router-dom'
import { handleLogout } from './Logout'
import { useNavigate } from "react-router-dom";
import { nav } from 'motion/react-client';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between 
        text-white font-bold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        p-4">

        {/* Logo Section */}
        <div className="flex items-center text-xl font-extrabold">
          <img 
            src="/logo.svg"   
            alt="Logo"
            className="h-12 w-auto invert"
          />
        </div>

        {/* Main Nav Links */}
        <ul className="
          flex 
          justify-center 
          gap-4
          sm:gap-6  sm:text-md
          md:gap-10 
          lg:gap-12 lg:justify-end

        ">
          <li><Link to="/" className="hover:text-yellow-300 hover:underline active:text-red-500">Home</Link></li>
          <li><Link to="/Contact" className="hover:text-yellow-300 hover:underline active:text-red-500">Contact</Link></li>
          <li><Link to="/Blog" className="hover:text-yellow-300 hover:underline active:text-red-500">Blog</Link></li>
          <li><Link to="/Services" className="hover:text-yellow-300 hover:underline active:text-red-500">Services</Link></li>
          <li><Link to="/About" className="hover:text-yellow-300 hover:underline active:text-red-500">About</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="
          flex 
          justify-center 
          gap-4 
          sm:gap-6 sm:text-md
          md:gap-8 
          lg:gap-10
          list-none
        ">
          <li><Link to="/Login" className="hover:text-yellow-300 hover:underline active:text-red-500">Log in</Link></li>
          <li><Link to="/Signup" className="hover:text-yellow-300 hover:underline active:text-red-500">Sign up</Link></li>
          {/* <button 
            className="hover:text-yellow-300 hover:underline active:text-red-500"
            onClick={() => handleLogout(null, navigate)}
          >
            Logout
          </button> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
