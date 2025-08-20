import React from 'react'
// import { Vlog } from "./Blog";
import Button from './ReadMore'
import Home from './Home'
import Section from './Card'
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

const cards = [
  {
    Image:'/img8.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  {
    image:'/img10.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  {
    image:'/img12.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  {
    image:'/img3.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  {
    image:'/img4.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  {
    image:'/img5.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px',
    width:'350px',
    className:'',
  },
  ]
  const Blog = () => {
    const blog = {
    }
    return (
      <div className=' bg-purple-500'>
        <div className=' text-7xl absolute z-10 top-36 left-[550px] text-gray-300 font-bold '>Blog</div>
        <div className=' text-lg absolute z-10 text-gray-100 top-60 font-bold  left-64 '>Remember, the best way to learn coding is by building projects. Start small,stay consistent, and</div>
        <div className=' absolute z-10 text-lg text-gray-100 left-[530px] font-bold top-[270px]'>  you’ll improve every day.</div>
        <img className='h-96  w-full relative opacity-70 shadow-purple shadow-sm' src="img2.png" />
        <Category/>
        <div className='flex flex-wrap'>
          {cards.map((cards,index)=>(
            <Section
            key={index}
            image = {cards.image}
        title="The Modern Way to Find Your Doctor"
        description = "Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme."
        height ='470px'
        width = '350px'
        className = ''
            />

          ))}
        </div>
    </div>
    
   )
  }
  export default Blog;
  export {Vlog};
