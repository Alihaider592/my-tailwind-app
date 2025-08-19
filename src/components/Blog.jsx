import React from 'react'
// import { Vlog } from "./Blog";
import Home from './Home'
import Category from './Category'
import ArtificialIntaligence from './ArtificialIntaligence'
import TechNewsReviews from './TechNewsReviews'
import TutorialsGuides from './TutorialsGuides'
import Webdevelopment from './Webdevelopment'
import {
   createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
const Vlog = () =>{
  const router = createBrowserRouter([
  {
    path:'/All',
    element:<><Category/><Home/></>
  },
  {
    path:'/ArtificialIntaligence',
    element:<><Category/><ArtificialIntaligence/></>
  },
  {
    path:'/Webdevelopment',
    element:<><Category/><Webdevelopment/></>
  },
  {
    path:'/TechNewsReviews',
    element:<><Category/><TechNewsReviews/></>
  },
  {
    path:'/TutorialsGuides',
    element:<><Category/><TutorialsGuides/></>
  },
  {
      path: "*", // ✅ Catch-all route
      element: (
        <div className="flex justify-center items-center h-screen text-3xl font-bold text-red-500">
          404 - Page Not Found
        </div>
  )},
])
return(
  <>
  <RouterProvider router={router}/>
  </>
)
}


const Blog = () => {
  const blog = {
  }
    return (
      <div className=' bg-purple-500'>
        <div className=' text-7xl absolute z-10 top-36 left-[550px] text-gray-300 font-bold '>Blog</div>
        <div className=' text-lg absolute z-10 text-gray-100 top-60 font-bold  left-64 '>Remember, the best way to learn coding is by building projects. Start small,stay consistent, and</div>
        <div className=' absolute z-10 text-lg text-gray-100 left-[530px] font-bold top-[270px]'>  you’ll improve every day.</div>
        <img className='h-96  w-full relative opacity-70 shadow-purple shadow-sm' src="img2.png" />
        {/* category bar */}
        <Category/>
          
        {/* </div> */}
        {/* first card */}
        <div className='flex flex-wrap '>
          <div className='m-10 h-[470px] w-[350px] p-2 rounded-3xl hover:scale-105 bg-white'>
          <img className=' rounded-3xl' src="img10.png" alt="" />
          <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
            <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
          </div>
          {/* second card */}
          <div className='m-10 h-[470px] w-[350px] p-2 rounded-3xl hover:scale-105 bg-white'>
            <img className=' rounded-3xl' src="img13.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-6 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
          </div>
            {/* third card */}
            <div className='m-10 h-[470px] w-[350px] p-2 hover:scale-105 rounded-3xl bg-white'>
            <img className=' rounded-3xl' src="img9.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
          </div>
          {/* card-4 */}
          <div className='m-10 h-[470px] hover:scale-105 w-[350px] p-2 rounded-3xl bg-white'>
            <img className=' rounded-3xl h-52 w-96' src="img8.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-8 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
             </div>
         {/* card 5  */}
         <div className='m-10 h-[470px] w-[350px] hover:scale-105 p-2 rounded-3xl bg-white'>
            <img className=' rounded-3xl' src="img7.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
          </div>
          {/* card 6 */}
          <div className='m-10 h-[470px] w-[350px] p-2 rounded-3xl hover:scale-105 bg-white'>
            <img className=' rounded-3xl h-56' src="img6.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-28  bg-blue-500`}>Read More</button>
          </div>
          {/* card 7 */}
          <div className='m-10 h-[470px] w-[350px] p-2 rounded-3xl hover:scale-105 bg-white'>
            <img className=' rounded-3xl h-52' src="img5.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-4 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
             </div>
    {/* card 8 */}
    <div className='m-10 h-[470px] w-[350px] p-2 hover:scale-105 rounded-3xl bg-white'>
            <img className=' rounded-3xl' src="img4.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-8 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
             </div>
    {/* card9 */}
    <div className='m-10 h-[470px] w-[350px] p-2 rounded-3xl hover:scale-105 bg-white'>
            <img className=' rounded-3xl' src="img3.png" alt="" />
            <div className='font-bold m-3 '>The Modern Way to Find Your Doctor</div>
            <div className='ml-3 text-gray-400'>Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.</div>
             <button className={`mt-6 px-4 py-2 text-white rounded-full font-bold ml-24  bg-blue-500`}>Read More</button>
             </div>
    
             
             </div>
             
             </div>
            )
          }
          export default Blog;
          export {Vlog};
