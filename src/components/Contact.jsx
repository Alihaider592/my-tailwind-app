import React from 'react'
import Contactusform from './Contactusform';
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div className=' flex w-full min-h-screen max-sm:inline-block max-sm:w-full max-sm:min-h-full  bg-purple-500 sm:flex-wrap sm:justify-center '>
    <div className="max-w-3xl  mx- p-6 sm:p-5">
      <h1 className="text-4xl font-bold text-white ml-[500px] max-sm:ml-0 sm:ml-0 mb-6 ">Contact Us</h1>

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
          The easiest way to get in touch is through email at
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
    <Contactusform/>
    <div>
  </div>
    </div>
  );
}
