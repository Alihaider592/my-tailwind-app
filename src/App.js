import "./App.css" 

import Services from "./components/Services"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Learnmore from "./components/Learnmore"
import Signup from "./components/Signup"
import { createBrowserRouter, RouterProvider,Outlet, } from "react-router-dom"
import Protectroute from "./components/Protectroute"
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

