import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Hamburgernavbar = ({ user, onLogout ,onclose }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="fixed right-0 top-0 w-64 h-full bg-white z-[9999] text-black font-normal rounded-md 
       shadow-sm transform transition-transform duration-300 ease-in-out
       ">
        <ul className="
          p-2 text-base
          
          ">
          <li className="p-1"><Link  to="/" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Home</Link></li>
          <li className="p-1"><Link  to="/Contact" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Contact</Link></li>
          <li className="p-1"><Link to="/Blog"onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Blog</Link></li>
          <li className="p-1"><Link to="/Services" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Services</Link></li>
          <li className="p-1"><Link to="/About" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">About</Link></li>
        </ul>
        
        {/* Separator Line */}
        <hr className="my-2 border-gray-200" />
         

        {/* Auth Buttons */}
        <div className="
          p-2
          list-none
        ">
          <li className="p-1"><Link to="/Login" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Log in</Link></li>
          <li className="p-1"><Link to="/Signup" onClick={onclose} className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">Sign up</Link></li>
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