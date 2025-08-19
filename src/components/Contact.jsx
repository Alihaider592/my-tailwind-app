import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div className=' flex  bg-purple-500'>
    <div className="max-w-3xl  mx- p-6">
      <h1 className="text-4xl font-bold text-white ml-[500px] mb-6">Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">
          We’d Love to Hear from You
        </h2>
        <p className="text-white leading-relaxed">
          We truly value every message we receive. Whether you have a question about
          our services, need technical support, want to share your ideas, or simply
          wish to connect with us, our team is always here to listen. Communication
          is at the heart of what we do, and your thoughts help us grow and serve
          you better.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">How to Reach Us</h2>
        <p className="text-white leading-relaxed">
          The easiest way to get in touch is through email at{" "}
          <span className="font-medium text-blue-600">alicoder592@gmail.com</span>,
          or you can fill out the form below. Once we receive your message, our
          support team carefully reviews it and gets back to you as quickly as
          possible. While we aim to respond within 24 hours, rest assured that every
          inquiry is handled with the attention it deserves.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">Why Your Message Matters</h2>
        <p className="text-white leading-relaxed">
          We believe that great relationships start with open conversation. So don’t
          hesitate—whether your message is big or small, important or just a casual
          hello, we look forward to hearing from you. Your feedback inspires us to
          improve, your questions give us a chance to guide you, and your ideas may
          even shape the future of what we create.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Thank You</h2>
        <p className="text-white leading-relaxed">
          Thank you for taking the time to connect with us. We’re excited to hear
          from you and continue building something meaningful together.
        </p>
      </section>
    </div>
    <section>
      <div className='h-[350px] w-[500px] mt-28 mr-10  pl-32 bg-white bg-opacity-10 rounded-xl shadow-lg '>
        <h1 className='text-white text-2xl font-bold pt-5 pl-[65px] '>Contact Us</h1>
        <p className='text-white mt-1 m-5'>We will get back to you asap!</p>
        <form action="post">
          <input className='p-2 w-28 rounded-sm border-1 border-gray-400' type="text" id='first name' placeholder='First name'/>
          <input className='p-2 w-28 rounded-sm border-1 border-gray-400 ml-10' type="text" id='first name' placeholder='Last name'/>
          <input className='p-2 block mt-5 w-[263px] rounded-sm border-1 border-gray-400' type="text" id='gmail' placeholder='E-mail ' />
           <input className='p-2  mt-5 w-[263px] rounded-sm border-1 border-gray-400' type="text" id='Phone' placeholder='Phone ' />
        <button class="px-8 py-3 bg-pink-600 hover:bg-pink-700 top-[70px] right-[170px]  rounded-lg text-white relative font-medium shadow-lg">Send</button>
        </form>
      </div>
    </section>
    <div>
  </div>
    </div>
  );
}
