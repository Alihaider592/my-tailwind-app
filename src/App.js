import "./App.css" 

import Services from "./pages/services/Services"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Navbar from "./pages/navbar/Navbar"
import Login from "./pages/login/Login"
import Learnmore from "./components/lernmore/Learnmore"
import Signup from "./pages/signup/Signup"
import { createBrowserRouter, RouterProvider,Outlet, } from "react-router-dom"
import Protectroute from "./components/auth/ruterauth/Protectroute"
import { children } from "react"
function App() {
    const router = createBrowserRouter([
        {
            
        element:<Protectroute/>,
        children:[
        {path : "/",element:<><Navbar/><Home/></>},
        {path : "/Contact",element:<><Navbar/><Contact/></>},
        {path : "/Blog",element:<><Navbar/><Blog/></>},
        {path : "/Services",element:<><Navbar/><Services/></>},
    ],
    },
        {path : "/Signup",element:<><Navbar/><Signup/></>},
        {path : "/Login",element:<><Navbar/><Login/></>},
        {path : "/About",element:<><Navbar/><About/></>},
        {path:"/Learnmore",element: <><Navbar/><Learnmore/></>},
    ]) 
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
    
}
            
export default App

