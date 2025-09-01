import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom";
import Button from "../../components/card/cardbtns/ReadMore";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users?.push(formData);


    localStorage.setItem("users", JSON.stringify(users));

    setFormData({ username: "", email: "", password: "" });

    // alert("User saved!");
    toast.success("you have signup successfully")
    setTimeout(()=>{
      navigate('/Login')
    },3000)
  };

  return (
    <div className="bg-gradient-to-r w-full min-h-screen fixed from-indigo-800 via-purple-800 to-pink-800 p-[104px] justify-center items-center flex">
      <div className="rounded-3xl max-sm:w-80 z-10 relative h-[450px] w-96 text-center bg-white shadow-2xl shadow-purple-400 shadow-inner bg-transparent">
        <h1 className="text-3xl font-bold  mt-10">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="h-10 w-80 rounded-3xl max-sm:w-72 bg-gray-300 border-2 border-gray-600 placeholder:text-stone-700 opacity-60 pl-10 text-blue-950 mb-1 mt-8"
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            className="h-10 w-80 rounded-3xl m-5 opacity-60 max-sm:w-72 pl-10 bg-gray-300 border-2 border-gray-600 placeholder:text-stone-700 text-blue-950"
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="h-10 w-80 rounded-3xl opacity-60 pl-10 bg-gray-300 max-sm:w-72 border-2 border-gray-600 placeholder:text-stone-700 text-blue-950"
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="mt-7  relative right-[85px]">
            <input
              className="fill-blue-400"
              type="radio"
              id="rememberMe"
              name="rememberMe"
              value="Remember me"
            />
            <label className="font-bold" htmlFor="rememberMe">
              {" "}
              Remember me
            </label>
          </div>
          <Button text="Sign Up" textColor="text-white" bgColor="bg-black" className="w-56 mt-2" />
          <p className="flex list-none pl-16 mt-2 font-bold">
            Already have an account?
            <Link to="/Login">
              <li className="hover:underline">Log in</li>
            </Link>
          </p>
        </form>
      </div>
             <ToastContainer position="top-center" autoClose="3000" />
    </div>
  );
};

export default Signup;
