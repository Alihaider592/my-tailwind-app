import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <img className='absolute opacity-45 blur-sm h-96 w-[100%]' src="imgback.png"/>
    <div className='h-96 w-full z-10 p-20  font-bold  bg-purple-800'>
      <h1 className='z-10 relative text-5xl flex items-center justify-center mb-5  '> <div className='text-pink-500'> Welocom</div><div className='text-purple-500'> to </div><div className='text-yellow-500'> Devlogix</div> </h1>
      <p class="z-10 text-lg md:text-xl text-gray-300 mb-8">
      <div className='z-10 flex relative items-center justify-center m-1 '>Your daily dose of programming tips, tutorials, and tech insights.Whether you're debugging at</div>  
      <div className='z-10 relative flex items-center justify-center '> midnight or building your next big idea,we've got the knowledge you  </div>
     <div className='flex relative items-center justify-center '>  need — byte by byte.</div>
    </p>
    <button class="px-6 py-3 bg-pink-600 hover:bg-pink-700 left-[480px] rounded-lg text-white relative font-medium shadow-lg"> <Link  to="/Learn more"><li className='list-none'>Learn more→</li></Link></button>
    </div>
    <div className='text-white  last:grid grid-cols-3 gap-10 bg-purple-500 p-2  flex flex-wrap '>
      <section class="max-w-4xl mx-auto px-6 py-12">
   What You'll Discover 
  <h2 class="text-3xl font-bold mb-6">What You’ll Discover</h2>
  <ul class="space-y-4">
    <li class="flex items-start">
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
      <img className='relative left-24' src="img40.png"/>
    </div>
  </ul>
</section> 
<section class="max-w-4xl mx-auto px-6 py-12 bg-white bg-opacity-10 rounded-xl shadow-lg text-center">
  <h2 class="text-3xl font-bold mb-4">Stay Connected</h2>
  <p class="mb-6">📬 Join our growing community of developers — Subscribe for weekly updates and never miss a post.</p>
  <button class="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-medium shadow-lg">
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
<div>
  <div className=' bg-gray-900 text-gray-500'>
<h1 className='text-xl font-bold ml-28 pb-3 pt-10' >Quick Links</h1>
<div className='absolute pl-10 flex gap-28 ml-28 list-none' >
              <Link  to="/"><li className='hover:underline'>Home</li></Link>
        <Link  to="/Contact"><li className='hover:underline'>Contact</li></Link>
        <Link  to="/Blog"><li className='hover:underline'>Blog</li></Link>
        <Link  to="/Services"><li className='hover:underline'>Services</li></Link>
        <Link  to="/About"><li className='hover:underline'>About</li></Link>
            </div>
            <div className='pl-28 mt-10'>
        <h3 class="text-xl font-bold mb-4">Subscribe</h3>
      <p class="text-sm mb-4">Get the latest updates right in your inbox.</p>
      </div>
      <div>
      <form action="post">
        <input className='w-[800px] ml-28 mb-10 rounded-lg h-50 pl-10' type="text" id='Enter your email' placeholder='Enter your email'/><button class="px-4 relative right-8 m-10 bg-pink-600 hover:bg-pink-700 rounded-lg text-white ">Join</button>
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
