import React from 'react'
import { Link,} from 'react-router-dom'
import Learnmore from './Learnmore'
const Home = () => {
  return (
    <>
    <img className='absolute opacity-45 blur-sm h-96 w-[100%]' src="imgback.png"/>
    <div className='h-96 w-full z-10 p-20  font-bold  bg-purple-800'>
      <h1 className=' relative text-5xl flex max-sm:text-4xl items-center gap-2 justify-center mb-5 font-bold z-10 '> <div className='text-pink-500'> Welocom</div><div className='text-purple-500'> to </div><div className='text-yellow-500'> Devlogix</div> </h1>
      <p class="z-10 text-lg md:text-xl sm:left-6 text-gray-300 mb-8 max-sm:text-sm sm:font-size [17px] height-[100px] relative left-[18px];">
      <div className='z-10 flex relative items-center justify-center m-1 '>Your daily dose of programming tips, tutorials, and tech insights.Whether you're debugging at</div>  
      <div className='z-10 relative flex items-center justify-center '> midnight or building your next big idea,we've got the knowledge you  </div>
     <div className='flex relative items-center justify-center '>  need — byte by byte.</div>
   <div className="flex justify-center mt-6">
  <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
                     bg-pink-600 hover:bg-pink-700 
                     rounded-lg text-white font-medium shadow-lg 
                     transition duration-300 ease-in-out">
    <Link to="/Learnmore">Learn more →</Link>
  </button>
</div>


    </p>
    <div className="flex justify-center mt-6">
</div>

    </div>
    <div className='w-full min-h-screen  text-white justify-center items-center block-flex last:grid grid-cols-3 gap-10  bg-purple-500 p-2  '>
      <section class="max-w-4xl mt-[5vw] mb-[2vw] mx-auto px-6 py-12">
   What You'll Discover 
  <h2 class="text-3xl font-bold">What You’ll Discover</h2>
  <ul class="space-y-4 ">
    <li class="flex items-start ">
      <span class="text-2xl mr-3">💻</span>
      <p><strong>Web Development Tutorials</strong> — Step-by-step coding guides for front-end and back-end.</p>
    </li>
    <li class="flex items-start">
      <span class="text-2xl mr-3">🛠️</span>
      <p><strong>Tech Tools & Reviews</strong> — Honest insights into the tools that boost productivity.</p>
    </li>
    <li class="flex items-start">
      <span class="text-2xl mr-3">⚡</span>
      <p><strong>Programming Tips & Tricks</strong> — Write cleaner, faster, and more efficient code.</p>
    </li>
    <li class="flex items-start">
      <span class="text-2xl mr-3">📰</span>
      <p><strong>Industry News & Trends</strong> — Stay informed about the latest in tech and software.</p>
    </li>
    <div>
      <img className='relative  left-8' src="img40.png"/>
    </div>
  </ul>
</section> 
<section class="max-w-4xl mx-auto px-6 py-12 bg-white bg-opacity-10 rounded-xl shadow-lg text-center">
  <h2 class="text-3xl font-bold mb-4">Stay Connected</h2>
  <p class="mb-6">📬 Join our growing community of developers — Subscribe for weekly updates and never miss a post.</p>
  <button class=" px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
                     bg-pink-600 hover:bg-pink-700 
                     rounded-lg text-white font-medium shadow-lg 
                     transition duration-300 ease-in-out">
   <h1> Subscribe Now</h1>
  </button>
</section>

<section class="max-w-4xl mx-auto px-6 py-12">
  <h2 class="text-3xl font-bold mb-6">Featured Reads</h2>
  <ul class="space-y-4">
    <li><strong>Mastering React Hooks — A Complete Beginner’s Guide</strong> — Take your React skills to the next level.</li>
    <li><strong>Top 10 VS Code Extensions for Developers in 2025</strong> — Save time and boost productivity.</li>
    <li><strong>Understanding APIs — From Basics to Advanced</strong> — Build powerful, connected apps.</li>
  </ul>
</section>
    </div>
  {/* footer */}
<div className=''>
  <div className='grid justify-center bg-gray-900 text-gray-500'>
            <div className='pl-10 mt-10'>
        <h3 class="text-xl font-bold mb-4">Subscribe</h3>
      <p class="text-sm mb-4">Get the latest updates right in your inbox.</p>
      </div>
      <div>
      <form action="post">
        <input className='w-[285px] max-sm:w-[250px] ml-10 max-sm:ml-28 h-10 rounded-lg h-50 pl-10' type="text" id='Enter your email' placeholder='Enter your email'/><button class="px-4 relative m-5 max-sm:bottom-[60px] max-sm:left-5 bg-pink-600 transition-all duration-300 ease-in-out hover:bg-pink-700 rounded-lg text-white h-10 ">Join</button>
      </form>
      </div>
      <div>
        <div class="border-t border-white border-opacity-20 py-4 text-center text-sm text-white">
    © 2025 DevLogix. All rights reserved.
  </div>
      </div>
</div>
</div>
    </>
  )
}

export default Home
