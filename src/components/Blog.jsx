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
        <div className="relative w-full">
  {/* Image */}
  <img
    className="h-96 w-full object-cover opacity-70 shadow-purple shadow-sm"
    src="img2.png"
    alt="Blog background"
  />

  {/* Heading */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl sm:text-7xl text-gray-300 font-bold z-10">Blog</h1>
    <p className="text-base sm:text-lg text-gray-100 font-bold mt-4 z-10">
      Remember, the best way to learn coding is by building projects. Start
      small, stay consistent, and
    </p>
    <p className="text-base sm:text-lg text-gray-100 font-bold mt-2 z-10">
      you’ll improve every day.
    </p>
  </div>
</div>

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
        className = 'flex '
            />

          ))}
        </div>
    </div>
    
   )
  }
  export default Blog;
  export {Vlog};
