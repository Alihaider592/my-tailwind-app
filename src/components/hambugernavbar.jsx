import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Hamburgernavbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex flex-col absolute z-50 right-[2%] items-center
        text-black bg-white z- font-bold 
        
        p-4">
        <ul className="
          justify-start 
          md:gap-10 
          lg:gap-12 lg:justify-end
          
          ">
          {/* <Hamburger/> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
         

        {/* Auth Buttons */}
        <div className="
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

export default Hamburgernavbar
