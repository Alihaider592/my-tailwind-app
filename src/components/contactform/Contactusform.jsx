import React from 'react'
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Contactusform = () => {
   const [formData, setFormData] = useState({
      FirstName: "",
      LastName:"",
      Email: "",
      Password: "",
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      users?.push(formData);
  
  
      localStorage.setItem("users", JSON.stringify(users));
  
      setFormData({ FirstName: "", LastName:"", Email: "", PhoneNumber: "" });
  
      // alert("User saved!");
      toast.success("We will contact you soon")
      setTimeout(()=>{
        navigate('/')
      },3000)
    };
  return (
    <div>
      <section>
      <div className='h-[420px] w-[500px] mt-28 mr-10 max-sm:mb-5 max-sm:w-[300px]  max-sm:ml-10 max-sm:pl-0  pl-32 bg-white bg-opacity-10 rounded-xl shadow-lg '>
        <h1 className='text-white text-2xl font-bold pt-5 pl-[65px] max-sm:pl-0  max-sm:flex max-sm:justify-center '>Contact Us</h1>
        <p className='text-white mt-1 max-sm:pl-0  max-sm:flex max-sm:justify-center  m-5'>We will get back to you asap!</p>
        <form className='max-sm:pl-0  max-sm:grid max-sm:justify-center' onSubmit={handleSubmit} action="post">
          <input className='p-2 w-[263px]  rounded-lg border-1 border-gray-400'
           type="FirstName"
            id='FirstName'
             placeholder='FirstName'
              value={formData.FirstName}
            onChange={handleChange}
            required
             />
          <input className='p-2 w-[263px] mt-5 rounded-lg border-1 border-gray-400'
           type="LastName"
            id='LastName'
             placeholder='LastName'
              value={formData.LastName}
            onChange={handleChange}
            required
             />
          <input className='p-2 block mt-5 w-[263px] rounded-lg border-1 border-gray-400' 
          type="Email"
           id='Email'
            placeholder='Email '
             value={formData.Email}
            onChange={handleChange}
            required
             />
           <input className='p-2  mt-5 w-[263px] rounded-lg border-1 border-gray-400'
            type="text"
             id='Phone'
              placeholder='Phone ' 
               value={formData.PhoneNumber}
            onChange={handleChange}
            required
              />
        <button class="px-8 py-3 bg-pink-600 hover:bg-pink-700  max-sm:w-12 max-sm:grid max-sm:justify-center max-sm:top-5 max-sm:left-[100px] top-[70px] right-[170px]  rounded-lg text-white relative font-medium shadow-lg">Send</button>
        </form>
      </div>
                   <ToastContainer position="top-center" autoClose="3000" />
    </section> 
    </div>
  )
}

export default Contactusform
