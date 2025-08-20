import React from 'react'
import Button from './ReadMore'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 p-[104px] justify-center items-center flex '>
      <div className=' rounded-3xl z-10 relative top h-[450px] w-96 text-center bg-purple-700 shadow-2xl shadow-purple-400 shadow-inner bg-transparent '>
      <h1 className='text-3xl  font-bold text-white mt-10'>Log in</h1>
      <form className='' jus action="post">
        <input className=' h-10 w-80 rounded-3xl opacity-60 pl-10 text-blue-950  mb-6  mt-8' type="text" id='Username' placeholder='Username'/>
        <input className=' h-10 w-80 rounded-3xl opacity-60 pl-10 text-blue-950 '  type="text,number" id='Password' placeholder='Password' />
        <div className='mt-7 relative right-[85px]'>
        <input className='fill-blue-400 ' type="radio" id='Remember me' name='Remember me' value="Remember me" />
        <label className='text-white ' htmlFor="name"> Remember me</label>
        </div>
         <Button 
        text="Log in" 
        textColor="" 
        bgColor="bg-white" 
        className="w-72  m-2"
      />
        <p className='flex pl-20 mt-2 text-white'>Don't have any account ?<Link className='list-none hover:underline'  to="/Signup"><li className=''>Sign up</li></Link></p>
      </form>
    </div>
      </div>
  )
}
export default Login