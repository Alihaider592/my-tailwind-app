import React from 'react'
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
      path:"/All",
      element:<><Category/><Home/></>
    },
    {
      path:"/ArtificialIntaligence",
      element:<><Category/><ArtificialIntaligence/></>
    },
    {
      path:"/Webdevelopment",
      element:<><Category/><Webdevelopment/></>
    },
    {
      path:"/TechNewsReviews",
      element:<><Category/><TechNewsReviews/></>
    },
    {
      path:"/TutorialsGuides",
      element:<><Category/><TutorialsGuides/></>
    },
    // {
    //   path: "*",
    //   element: (
    //     <div className="flex justify-center items-center h-screen text-3xl font-bold text-red-500">
    //       404 - Page Not Found
    //     </div>
    //   )
    // },
  ])
  return <RouterProvider router={router}/>
}

const cards = [
  {
    image:'/img8.png',
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
  {
    image:'/img8.png',
    title :'The Modern Way to Find Your Doctor ',
    description:'Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.',
    height: '470px ',
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
  return (
    <div className='bg-purple-500'>
      <div className="relative w-full">
        <img
          className="w-full object-cover h-96 opacity-70 shadow-purple shadow-sm"
          src="img2.png"
          alt="Blog background"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-center px-4">
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
      <div className='w-full min-h-screen justify-center flex flex-wrap'>
        {cards.map((card,index)=>(
          <Section
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            height={card.height}
            width={card.width}
            className='flex max-sm:w-[400px] max-sm:flex max-sm:justify-center'
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
export {Vlog}
