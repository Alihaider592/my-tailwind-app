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
  // const handleLogin = (e) =>{
  //   e.preventDefault();
  // }
    
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
        // alert('logged in successfull')
        toast.success("Logged in successfull")
        setError('')
        // onLogin(matchedUser)
        
         setTimeout(()=>{
      navigate('/')
    },3000)
      }else{
        // setError('invalid username or password')
        // alert ('invalid username or password')
        toast.error("you need to sign up first")
         setTimeout(()=>{
      navigate('/Signup')
    },3000)
      }
    }

  return (
    <div className='bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 p-[104px] justify-center items-center flex '>
      <div className=' rounded-3xl z-10 relative top h-[450px] w-96 text-center bg-purple-700 shadow-2xl shadow-purple-400 shadow-inner bg-transparent '>
      <h1 className='text-3xl  font-bold text-white mt-10'>Log in</h1>
      <form onSubmit={handleLogin}  action="post">
        <input className=' h-10 w-80 rounded-3xl opacity-60 pl-10 text-blue-950  mb-6  mt-8'
         type="text"
           value={formData.username}
            onChange={handleChange}
          id='username'
           placeholder='username'
           />
        <input className=' h-10 w-80 rounded-3xl opacity-60 pl-10 text-blue-950 '
         type="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
           />
        <div className='mt-7 relative right-[85px]'>
        <input className='fill-blue-400 ' type="radio" id='Remember me' name='Remember me' value="Remember me" />
        <label className='text-white ' htmlFor="name"> Remember me</label>
        </div>
      <Button
      
      onClick={handleLogin}
      text='login'
      textColor='black'
      bgColor='bg-white'
      className=''
      />
        <p className='flex pl-20 mt-2 text-white'>Don't have any account ?<Link className='list-none hover:underline'  to="/Signup"><li className=''>Sign up</li></Link></p>
      </form>
    </div>
    <ToastContainer position="top-center" autoClose="3000" />
      </div>
  )
}
export default Login