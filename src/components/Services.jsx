import React from 'react'
import Button from './ReadMore'
const boxes = [
  {
    Title:'Expert Tutorial',
    discription:"Comprehensive guides that turn complex topics into simple, actionable steps so you can build real-world projects.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    ),
    height:'470px',
    width:'350px',
    className:''
  },
{
    title: 'Career Development',
    description: 'Access our guides on how to build a standout portfolio, prepare for technical interviews, and navigate the job market.',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path></svg>
    ),
    height:'470px',
    width:'350px',
    className:''
  },
  {
         title: 'Industry News',
    description: 'Stay ahead of the curve with our regular updates on the latest trends, breakthroughs, and news in the tech world.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2m0 0h2a2 2 0 012 2v2m-6 6h6"></path></svg>
    ),
    height:'470px',
    width:'350px',
    className:''
  },
  {
    Title:'Expert Tutorial',
    discription:"Comprehensive guides that turn complex topics into simple, actionable steps so you can build real-world projects.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    ),
    height:'470px',
    width:'350px',
    className:''
  },


]
const Services = () => {
  const services={
    Title:'Expert Tutorial',
    discription:"Comprehensive guides that turn complex topics into simple, actionable steps so you can build real-world projects.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
    ),
    iconBgColor: 'bg-blue-100',
    hoverScale: 'hover:scale-105',
    buttonColor: 'bg-blue-500',
  }
  const feature = {
    title: 'Career Development',
    description: 'Access our guides on how to build a standout portfolio, prepare for technical interviews, and navigate the job market.',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path></svg>
    ),
    iconBgColor: 'bg-green-100',
    hoverScale: 'hover:scale-105',
    buttonColor: 'bg-green-500',
  }
  const service = {
     title: 'Industry News',
    description: 'Stay ahead of the curve with our regular updates on the latest trends, breakthroughs, and news in the tech world.',
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2m0 0h2a2 2 0 012 2v2m-6 6h6"></path></svg>
    ),
    iconBgColor: 'bg-yellow-100',
    hoverScale: 'hover:scale-105',
    buttonColor: 'bg-yellow-500',
  }
  const serv = {
    title: 'Thriving Community',
    description: 'Join a community of like-minded individuals to ask questions, share your knowledge, and connect with other developers.',
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5m-5 0v-5m0 5L12 12m-2-2L2 20m5 0l-5-5"></path></svg>
    ),
    iconBgColor: 'bg-red-100',
    hoverScale: 'hover:scale-105',
    buttonColor: 'bg-red-500',
  }
  return (
    <div className='bg-purple-500 '>
      {/* main text */}
        <main className="container mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How DevLogix Helps You Succeed</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Our services are designed to support you at every stage of your journey, from learning the basics to advancing your career.
          </p>
        </div>

        {/* card 1 */}
        <div className="  flex justify-center items-center gap-8">
          <div className='h-[350px] w-[300px] p-8 bg-white rounded-3xl hover:scale-105 '>
          <div className='ml-[85px] h-14 w-14 rounded-full flex justify-center items-center bg-blue-200 mb-5 '>{services.icon}</div>
          <div className='ml-10 mb-3 font-bold text-gray-900 text-xl'>{services.Title}</div>
          <div className='text-gray-700'>{services.discription}</div>
          {/* <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-14 ${services.buttonColor}`}>Read More</button> */}
          {/* <ReadMore className=''/> */}
          <Button 
        text="Read More" 
        textColor="text-white" 
        bgColor="bg-blue-500" 
        className="hover:bg-green-700 relative left-16 top-5"
      />
          </div>
          {/* card2 */}
          <div className='h-[350px] w-[300px] p-8 bg-white rounded-3xl hover:scale-105'>
          <div className='ml-20 mb-5 h-14 w-14 rounded-full bg-green-200 justify-center items-center flex '>{feature.icon}</div>
          <div className='ml-7 mb-3 font-bold text-gray-900 text-lg'>{feature.title}</div>
          <div className='text-gray-700' >{feature.description}</div>
          {/* <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-14 ${feature.buttonColor}`}>Read More</button> */}
          {/* <ReadMore/> */}
          <Button 
        text="Read More" 
        textColor="text-white" 
        bgColor="bg-green-500" 
        className="hover:bg-green-700 relative left-16 top-5"
      />
          </div>
          {/* card 3 */}
          <div className='h-[350px] w-[300px] p-8 bg-white rounded-3xl hover:scale-105'>
          <div className='ml-20 mb-5 h-14 w-14 rounded-full bg-yellow-200 flex justify-center items-center'>{service.icon}</div>
          <div className='ml-10 mb-3 font-bold text-gray-900 text-xl'>{service.title}</div>
          <div className='text-gray-700' >{service.description}</div>         
          {/* <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-14 ${service.buttonColor}`}>Read More</button> */}
          {/* <ReadMore/> */}
          <Button 
        text="Read More" 
        textColor="text-white" 
        bgColor="bg-yellow-500" 
        className="hover:bg-green-500 relative left-16 top-5"
      />
        </div>
        </div>
        {/* card4 */}
        <div className='h-[350px] w-[300px] p-8 bg-white ml-28 mt-10 rounded-3xl hover:scale-105'>
        <div className='ml-20 mb-5 h-14 w-14 rounded-full bg-yellow-200 flex justify-center items-center'>{serv.icon}</div>
        <div className='ml-6 mb-3 font-bold text-gray-900 text-xl'>{serv.title}</div>
        <div className='text-gray-700'>{serv.description}</div>
        {/* <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-14 ${serv.buttonColor}`}>Read More</button> */}
        {/* <ReadMore/> */}
        <Button 
        text="Read More" 
        textColor="text-white" 
        bgColor="bg-red-600" 
        className="hover:bg-green-500 relative left-16 top-5"
      />
        </div>
      </main>
      </div>
    )
  }
  


export default Services
