// Logout.js
import { toast , ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const handleLogout = (onLogout, navigate) => {
  localStorage.removeItem("users");
  if (onLogout) onLogout();
  toast.error("you have logged out your account")
   setTimeout(()=>{
      navigate('/Signup')
    },3000)
};
 <ToastContainer position="top-center" autoClose="3000" />