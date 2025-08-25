import "./App.css" 
import Services from "./components/Services"

// import {ReactComponent as Mylogo} from"./components/logo.svg"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Learnmore from "./components/Learnmore"
import Signup from "./components/Signup"
import { createBrowserRouter, RouterProvider,outlet } from "react-router-dom"
import { toast } from "react-toastify"
function App() {
    const router = createBrowserRouter([
        {
            path : "/",
            element:<><Navbar/><Home/></>
        },
        {
            path : "/Contact",
            element:<><Navbar/><Contact/></>
        },
        {
            path : "/Blog",
            element:<><Navbar/><Blog/></>
        },
        {
            path : "/Services",
            element:<><Navbar/><Services/></>
        },
        {
            path : "/Signup",
            element:<><Navbar/><Signup/></>
        },
        {
            path : "/Login",
            element:<><Navbar/><Login/></>
        },
        {
            path : "/About",
            element:<><Navbar/><About/></>
        },
        {
          path:"/Learnmore",
          element: <><Navbar/><Learnmore/></>
        },
    ]) 
      return(
          <>
        <RouterProvider router={router}/>
        {/* <Mylogo className='absolute pb-3 sm:top-0 invert'/> */}

        </>
    )
}
            
export default App

