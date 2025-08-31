import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Hamburgernavbar = ({ user, onLogout ,onclose }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="fixed  right-0   top-0 w-64 h-full  bg-white z-[9999] p-6 shadow-l
  items-center
        text-black  z- font-bold 
        
       ">
        <ul className="
          justify-start 
          md:gap-10 
          lg:gap-12 lg:justify-end
          
          ">
          {/* <Hamburger/> */}
          <li><Link to="/" onClick={onclose}>Home</Link></li>
          <li><Link to="/Contact" onClick={onclose}>Contact</Link></li>
          <li><Link to="/Blog"onClick={onclose}>Blog</Link></li>
          <li><Link to="/Services" onClick={onclose}>Services</Link></li>
          <li><Link to="/About" onClick={onclose}>About</Link></li>
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
          <li><Link to="/Login" onClick={onclose} className="hover:text-yellow-300 hover:underline active:text-red-500">Log in</Link></li>
          <li><Link to="/Signup" onClick={onclose} className="hover:text-yellow-300 hover:underline active:text-red-500">Sign up</Link></li>
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
