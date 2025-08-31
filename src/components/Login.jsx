import React, { useState } from 'react'
import { toast , ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Button from './ReadMore'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
    const [isLogedin, setIsLogedin]=useState(false);
    const [error,setError] = useState('');
    const navigate = useNavigate()

    const handleChange = (e)=>{
  const { id, value } = e.target;
  setFormData((prev) => ({...prev,[id]: value,}));
  }
  const handleLogin = (e)=>{
    e.preventDefault();
      const savedUsers =JSON.parse(localStorage.getItem('users')) ||[]
      const matchedUser = savedUsers.find(
        (user)=>
        user.username ===formData.username&&
        user.password === formData.password
      )
      if (matchedUser) {
        toast.success("Logged in successfull")
        setError('')
         setTimeout(()=>{
      navigate('/')
    },3000)
      }else{
        toast.error("you need to sign up first")
         setTimeout(()=>{
      navigate('/Signup')
    },3000)
      }
    }

  return (
    <div className='bg-gradient-to-r w-full h-screen fixed max-sm:h-screen from-indigo-800 via-purple-800 to-pink-800 p-[104px] justify-center items-center flex '>
      <div className=' rounded-3xl z-10 relative max-sm:w-80 h-[450px] p-5 w-96 text-center bg-white shadow-2xl shadow-purple-400 shadow-inner bg-transparent '>
      <h1 className='text-3xl  font-bold  text-black  mt-10'>Log in</h1>
      <form onSubmit={handleLogin}  action="post">
        <input className=' h-10 w-80 bg-gray-300 border-2 max-sm:w-72 placeholder:text-stone-700 cursor-handler border-gray-600 rounded-3xl opacity-60 pl-10 text-blue-950  mb-6  mt-8'
         type="text"
           value={formData.username}
            onChange={handleChange}
          id='username'
           placeholder='username'
           />
        <input className=' h-10 w-80 bg-gray-300 border-2 max-sm:w-72 placeholder:text-stone-700 border-gray-600 rounded-3xl opacity-60 pl-10 text-blue-950 '
         type="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
           />
        <div className='mt-7 relative max-sm:ml-10 right-[85px]'>
        <input type="radio" id='Remember me' name='Remember me' value="Remember me" />
        <label className='font-bold ' htmlFor="name"> Remember me</label>
        
        </div>
         <Button
      onClick={handleLogin}
      text='login'
      textColor='black'
      bgColor='bg-black'
      className='w-56 mt-2 text-white'
      />
     
        <p className='flex pl-12 mt-2 max-sm:text-md max-sm:pl-5 font-bold'>Don't have any account ?<Link className='list-none hover:underline'  to="/Signup"><li className=''>Sign up</li></Link></p>
      </form>
    </div>
    <ToastContainer position="top-center" autoClose="3000" />
      </div>
  )
}
export default Login