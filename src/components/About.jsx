import React from 'react'
const About = () => {
  return (
    <div className='flex p-10 bg-purple-500 '>
      <div>
      <div className='font-bold ml-12 mt-[20px] text-gray-100 text-5xl'>About DevLogix</div>
      <div className='flex  gap-10 justify-center items-center h-[395px]'>
      <div className='text-gray-200 w-[45%] '>
        <div className='text-lg font-bold'> <span>1)</span> What Devlogix is (a blog, company, community, or portfolio).</div>
        <div>“Devlogix is a platform dedicated to simplifying web development concepts and helping learners build real-world projects.”</div>
        <div className='text-lg font-bold'><span>2)</span>Mission / Purpose</div>
        <div>Why you started it.</div>
        <div>“Our mission is to empower beginners and developers with clear, practical tutorials in React, Tailwind CSS, and modern web technologies.”</div>
        <div className='text-lg font-bold'><span>3)</span>What You Provide</div>
        <div>Tutorials, resources, projects, insights, or services.</div>
        <div>“We provide step-by-step guides, coding tips, and project-based learning resources so you can level up your skills.”</div>
        </div>
          
        <div className='text-white w-[45%]'>
        
        <div className='text-lg font-bold'><span>4)</span> Audience / Community</div>
        <div>Who it’s for.</div>
        <div>“Whether you’re just starting your coding journey or looking to refine your front-end skills, Devlogix is here to guide you.”</div>
        <div className='text-lg font-bold'><span>5)</span> Vision (Future Goals)</div>
        <div>Where you want to take it.</div>
        <div>“Our vision is to build a community of passionate developers who share knowledge, collaborate, and grow together.”</div>
      </div>
      </div>
      <button class="ml-20 relative bottom-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-medium shadow-lg">Read More</button>
      </div>
      </div>
  )
}

export default About
