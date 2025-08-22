import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = ({onLogout}) => {
  const navigate = useNavigate();
  // const gotoHome = ()=>{
    // }
    const handleLogout = ()=>{
            localStorage.removeItem('setitem')
            if (onLogout) onLogout();
            navigate('Signup')
        }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
