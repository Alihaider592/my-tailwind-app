import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleLogout } from "../logout/Logout";
import Hamburgercomponents from "../../components/hamburger/hamburgerbtn/Hamburger";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("users"));
    setUser(savedUser);
  }, []);

  return (
    <div>
      <nav className="flex items-center sticky justify-between text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
        
        {/* Logo */}
        <div className="flex items-center text-xl font-extrabold">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto invert" />
        </div>

        {/* Hamburger */}
        <div className="block sm:hidden">
          <Hamburgercomponents />
        </div>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-6 md:gap-10 lg:gap-12">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>

        {/* Auth buttons */}
        {!user ? (
          <ul className="hidden sm:flex items-center gap-6 md:gap-8 lg:gap-10">
            <li><Link to="/Login">Log in</Link></li>
            <li><Link to="/Signup">Sign up</Link></li>
          </ul>
        ) : (
          <ul className="hidden sm:flex items-center gap-6 md:gap-8 lg:gap-10">
            <li>
              <button onClick={() => handleLogout(() => setUser(null), navigate)}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
