import React from 'react'
import Button from './cardbtns/ReadMore'
const Section = ({
    image = " /img8.png",
    title="The Modern Way to Find Your Doctor",
    description = "Clean healthcare website. Main page helps users find doctors and book appointments. A separate section shows testimonials and a contact form for business. It uses a calm, professional color scheme.",
    height ='470px',
    width = '350px',
    className = '',
}) => {
  return (
    <section
    className={`font-bold,${image},${title},${description},${height},${width},${className}
    // `}
    >
             <div className='m-10 h-[470px] transition-all duration-300 ease-in-out hover:scale-105 w-[400px] p-2  rounded-3xl bg-white'>
            <img className=' rounded-3xl h-52 w-full' src={image} alt="" />
            <div className='font-bold m-3 max-sm:text-sm '>{title}</div>
            <div className='ml-3 text-gray-400 max-sm:text-sm'>{description}</div>
             <Button 
        text="Read More" 
        textColor="text-white" 
        bgColor="bg-blue-600" 
        className="transition-all duration-300 ease-in-out max-sm:left-24 hover:bg-green-500 relative left-32 top-5"
      />
            </div>
    </section>
)
}

export default Section
