import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import trophy from "../assets/trophy.png"
import messageIcon from "../assets/messageIcon.png" 
import rectangleLogin from "../assets/rectangleLogin.png"
import rectangleLogin2 from "../assets/rectangleLogin2.png"
import { useNavigate } from 'react-router-dom'

const ForgetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/email-OTP")
  }

  return (
    <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-white md:bg-white lg:bg-[#FFF9E5]">

      {/* LEFT PART (Background Rectangles, Trophy, Desktop Logo) - SHOW only on lg and above */}
      <div className="hidden lg:block  left-0 top-0 h-full w-1/2">

              {/* Background Rectangles */}
              <div className="hidden md:block absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
                           <img
                             src={rectangleLogin}
                             alt=""
                             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
                           />
                           <img
                             src={rectangleLogin2}
                             alt=""
                             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
                           />
                         </div>

        {/* Desktop Logo */}
 <div className='absolute left-25 bottom-50'>
          <img src={logo} className='w-[60%]' alt="Logo" />
        </div>

   

        {/* Bottom Background */}
        <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
          <img
            src={rectangleLogin}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
          />
          <img
            src={rectangleLogin2}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
          />
        </div>
      </div>

      {/* Mobile Logo (visible only on md and below) */}
      <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
        <img src={logo} className='w-32' alt="Logo" />
      </div>

      {/* Message Icon (always visible) */}
      <img src={messageIcon} className='hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
           {/* Trophy */}
        <img src={trophy} alt="" className='hidden lg:block w-[10%] sm:w-[8%] md:w-[10%] absolute md:mt-[25%] mb-[50%] ml-50 z-20' />

      {/* Form Section */}
      <div className='w-full md:w-full  lg:w-[50%] absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
        <div className="w-[90%] lg:w-[340px] lg:mt-40  lg:max-w-[340px] max-w-[340px] md:w-[100%]  md:max-w-[440px] md:mt-[40%] mx-auto mt-20  z-10 bg-white px-6 py-8 rounded-md">
          <h2 className="text-3xl font-bold lg:mb-5 md:mb-3 lg:text-3xl md:text-5xl text-center mb-3">Forgot password</h2>

          <p className="text-gray-500 md:text-xl lg:text-sm text-sm text-center mb-6">
            Please enter your email to reset your password
          </p>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1"></label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your email"
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          <button
            className="w-full lg:font-semibold lg:h-[40px] lg:text-lg bg-yellow-400 md:h-[50px] md:text-xl md:font-bold text-white font-semibold py-1 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass
