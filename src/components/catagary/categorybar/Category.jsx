import react from 'react'
import { Link } from 'react-router-dom'
 function category() {
    return(
            <div>
            <ul className='flex gap-14 h-10 max-sm:text-[9px] max-sm:gap-2 items-center font-bold shadow-xl text-white bg-indigo-700'>
             <Link  to="/All"><li className='ml-10 max-sm:mr-3 max-sm:ml-2'>All</li></Link>
            <Link  to="/ArtificialInteligence"><li>Artificial Inteligence</li></Link>
           <Link  to="/WebDevlopment"><li>Web Devlopment</li></Link>
             <Link  to="/TechNewsReviews"><li>Tech News & Reviews</li></Link>
            <Link   to="/TutorialsGuides"><li>Tutorials & Guides</li></Link>
            </ul>
          </div>
          )
 }
 export default category
